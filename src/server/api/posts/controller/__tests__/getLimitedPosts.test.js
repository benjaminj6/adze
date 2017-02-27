import test from 'ava'
import sinon from 'sinon'
import 'sinon-mongoose'
import 'sinon-as-promised'

import { Post } from '~/server/models'
import { createPosts } from '~/server/utils/test-utils'
import { getLimitedPosts } from '..'

test.beforeEach(t => {
  t.context.ctx = {
    app: { emit: () => {} }
  }
  t.context.emitter = sinon.spy(t.context.ctx.app, 'emit')
  t.context.next = sinon.spy()
})

test('getLimitedPosts() -- should return number of posts requested', async t => {
  const { next, ctx } = t.context
  ctx.params = { number: 3 }

  sinon.mock(Post)
    .expects('find')
    .chain('sort').withArgs('-date')
    .chain('limit').withArgs(3)
    .chain('populate').withArgs('tags')
    .resolves(createPosts(3))

  await getLimitedPosts(ctx, next)
  t.is(ctx.status, 200)
  t.is(ctx.body.length, 3)
  t.true(next.calledOnce)
})

test('getLimitedPosts() -- should propagate error if no ctx.params.number', async t => {
  const { emitter, next, ctx } = t.context
  ctx.params = {}

  await getLimitedPosts(ctx, next)
  const err = emitter.args[0][1]

  t.true(emitter.calledOnce)
  t.false(next.calledOnce)
  t.is(err.status, 400)
  t.is(err.message, 'Posts must be a whole number above 0')
})

test('getLimitedPosts() -- should propagate error if ctx.params.number === 0', async t => {
  const { emitter, next, ctx } = t.context
  ctx.params = { number: 0 }

  await getLimitedPosts(ctx, next)
  const err = emitter.args[0][1]

  t.true(emitter.calledOnce)
  t.false(next.calledOnce)
  t.is(err.status, 400)
  t.is(err.message, 'Posts must be a whole number above 0')
})

test.todo('should propagate error if tags are not an array')
