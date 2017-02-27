import test from 'ava'
import sinon from 'sinon'
import 'sinon-mongoose'
import 'sinon-as-promised'

import { editTag } from '..'
import { Tag } from '~/server/models'
import { createTags } from '~/server/utils/test-utils'
import { createError } from '~/server/utils'

test.beforeEach(t => {
  t.context = {
    query: sinon.mock(Tag).expects('findByIdAndUpdate'),
    next: sinon.spy(),
    ctx: {
      app: { emit: () => {} }
    }
  }

  t.context.emitter = sinon.spy(t.context.ctx.app, 'emit')
})

test.afterEach(t => {
  Tag.findByIdAndUpdate.restore()
  t.context.next.reset()
  t.context.emitter.reset()
  t.context.ctx.app.emit.restore()
})

test.serial('should return the edited tag', async t => {
  const { ctx, query, next, emitter } = t.context
  ctx.params = { id: 2 }
  ctx.request = { body: { name: 'edited', color: '#f00' } }
  query
    .withArgs(2, {
      name: 'edited',
      color: '#f00'
    })
    .chain('exec')
    .resolves(createTags(1))

  await editTag(ctx, next)
  t.true(next.calledOnce)
  t.false(emitter.calledOnce)
  t.is(ctx.status, 200)
})

test.serial('should propagate err with default status (400)', async t => {
  const { ctx, query, next, emitter } = t.context
  ctx.params = { id: 'foo' }
  ctx.request = { body: { name: 'test' } }
  query
    .withArgs('foo', {
      name: 'test'
    })
    .chain('exec')
    .rejects(new Error('test'))

  await editTag(ctx, next)
  const err = emitter.args[0][1]

  t.true(emitter.calledOnce)
  t.false(next.calledOnce)
  t.is(err.status, 400)
})

test.serial('should propagate err with custom status', async t => {
  const { ctx, query, next, emitter } = t.context
  ctx.params = { id: 'foo' }
  ctx.request = { body: { color: 'test' } }
  query
    .withArgs('foo', {
      color: 'test'
    })
    .chain('exec')
    .rejects(createError(401, 'test'))

  await editTag(ctx, next)
  const err = emitter.args[0][1]

  t.true(emitter.calledOnce)
  t.false(next.calledOnce)
  t.is(err.status, 401)
})
