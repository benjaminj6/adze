import test from 'ava'
import sinon from 'sinon'
import 'sinon-mongoose'
import 'sinon-as-promised'

import { Tag } from '~/server/models'
import { addTag } from '..'
import { createTags } from '~/server/utils/test-utils'
import { createError } from '~/server/utils'

test.beforeEach(t => {
  t.context.create = sinon.mock(Tag)
    .expects('create') // pass the withArgs and resolve/reject in individual tests
  t.context.next = sinon.spy()
  t.context.ctx = {
    app: {
      emit: () => {}
    }
  }
  t.context.emitter = sinon.spy(t.context.ctx.app, 'emit')
})

test.afterEach.always(t => {
  Tag.create.restore()
  t.context.ctx.app.emit.restore()
  t.context.next.reset()
  t.context = {}
})

test.serial('should return the newly created tag', async t => {
  const { ctx, create, next, emitter } = t.context
  ctx.request = { body: { name: 'test', color: '#100' } }
  create
    .withArgs({
      name: 'test',
      color: '#100'
    })
    .resolves(createTags(1))

  await addTag(ctx, next)
  t.is(ctx.status, 201)
  t.is(ctx.body.name, 'test-0')
  t.is(ctx.body.color, '#000')
  t.false(next.calledOnce)
  t.false(emitter.calledOnce)
})

test.serial('should return the newly created tag if no color given', async t => {
  const { ctx, create, next, emitter } = t.context
  ctx.request = { body: { name: 'test' } }
  create
    .withArgs({
      name: 'test'
    })
    .resolves(createTags(1))

  await addTag(ctx, next)
  t.is(ctx.status, 201)
  t.is(ctx.body.name, 'test-0') // comes from the createTags util rather than actual input
  t.false(next.calledOnce)
  t.false(emitter.calledOnce)
})

test.serial('should propagate error with status if given', async t => {
  const { ctx, create, next, emitter } = t.context
  ctx.request = { body: { name: 'test' } }

  create
    .withArgs({
      name: 'test'
    })
    .rejects(createError(401, 'test error'))

  await addTag(ctx, next)
  const err = emitter.args[0][1]

  t.true(emitter.calledOnce)
  t.false(next.calledOnce)
  t.is(err.status, 401)
})

test.serial('should propagate error with default if no status given', async t => {
  const { ctx, create, next, emitter } = t.context
  ctx.request = { body: 'I am a string' }

  create
    .rejects(new Error('test'))

  await addTag(ctx, next)
  const err = emitter.args[0][1]

  t.true(emitter.calledOnce)
  t.false(next.calledOnce)
  t.is(err.status, 400)
})
