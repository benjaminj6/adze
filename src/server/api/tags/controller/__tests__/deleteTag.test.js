import test from 'ava'
import sinon from 'sinon'
import 'sinon-mongoose'
import 'sinon-as-promised'

import { Tag } from '~/models'
import { createTags } from '~/utils/test-utils'
import { deleteTag } from '..'

test.beforeEach(t => {
  t.context.query = sinon.mock(Tag)
    .expects('findByIdAndRemove')
  t.context.next = sinon.spy()
  t.context.ctx = {
    app: { emit: () => {} }
  }
  t.context.emitter = sinon.spy(t.context.ctx.app, 'emit')
})

test.afterEach(t => {
  Tag.findByIdAndRemove.restore()
  t.context.ctx.app.emit.restore()
  t.context.emitter.reset()
  t.context.next.reset()
})

test.serial('should return the deleted item and status 200', async t => {
  const { query, ctx, next, emitter } = t.context
  ctx.params = { id: 2 }
  const tag = createTags(1)
  query
    .withArgs(2)
    .resolves(tag)

  await deleteTag(ctx, next)
  t.true(next.calledOnce)
  t.false(emitter.calledOnce)
  t.is(ctx.status, 200)
  t.is(ctx.body, tag)
})

test.serial('should propagate err if query returns nothing', async t => {
  const { query, ctx, next, emitter } = t.context
  ctx.params = { id: 2 }
  query.resolves(undefined)

  await deleteTag(ctx, next)
  const err = emitter.args[0][1]

  t.true(emitter.calledOnce)
  t.false(next.calledOnce)
  t.is(err.status, 404)
  t.regex(err.message, /No tags with the specified id were found/)
})
