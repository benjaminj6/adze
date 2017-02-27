import test from 'ava'
import sinon from 'sinon'
import 'sinon-mongoose'
import 'sinon-as-promised'

import { Tag } from '~/server/models'
import { createTags } from '~/server/utils/test-utils'
import { createError } from '~/server/utils'
import { getTags } from '..'

test.beforeEach(t => {
  t.context = {
    query: sinon.mock(Tag)
      .expects('find')
      .chain('exec'),
    next: sinon.spy(),
    ctx: {
      app: { emit: () => {} }
    }
  }

  t.context.emitter = sinon.spy(t.context.ctx.app, 'emit')
})

test.afterEach(t => {
  Tag.find.restore()
  t.context.next.reset()
  t.context.query.reset()
})

test.serial('should return tags', async t => {
  const { ctx, query, next, emitter } = t.context
  query.resolves(createTags(3))

  await getTags(ctx, next)
  t.true(next.calledOnce)
  t.false(emitter.calledOnce)
})

test.serial('should propagate default err', async t => {
  const { ctx, query, next, emitter } = t.context
  query.rejects(new Error('test'))

  await getTags(ctx, next)
  const err = emitter.args[0][1]

  t.true(emitter.calledOnce)
  t.false(next.calledOnce)
  t.is(err.status, 404)
  t.is(err.message, 'test')
})

test.serial('should propagate custom err', async t => {
  const { ctx, query, next, emitter } = t.context
  query.rejects(createError(401, 'test'))

  await getTags(ctx, next)
  const err = emitter.args[0][1]

  t.true(emitter.calledOnce)
  t.false(next.calledOnce)
  t.is(err.status, 401)
  t.is(err.message, 'test')
})
