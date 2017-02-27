import test from 'ava'
import sinon from 'sinon'
import 'sinon-mongoose'
import 'sinon-as-promised'

import { Post } from '~/models'
import { createPosts } from '~/utils/test-utils'
import { deletePost } from '..'

test.beforeEach(t => {
  t.context.query = sinon.mock(Post)
      .expects('findByIdAndRemove').withArgs(2)
  t.context.next = sinon.spy()
  t.context.ctx = {
    app: { emit: () => {} }
  }
  t.context.emitter = sinon.spy(t.context.ctx.app, 'emit')
})

test.afterEach(t => {
  Post.findByIdAndRemove.restore()
  t.context.ctx.app.emit.restore()
  t.context.emitter.reset()
  t.context.next.reset()
})

test.serial('deletePost() -- should return the deleted item', async t => {
  const { query, ctx, next } = t.context
  ctx.params = { id: 2 }
  query.resolves(createPosts(1))

  await deletePost(ctx, next)
  t.is(ctx.status, 200)
  t.is(ctx.body, 'Post removed successfully')
  t.true(next.calledOnce)
})

test.serial('deletePost() -- should propagate err if query returns nothing', async t => {
  const { query, ctx, next, emitter } = t.context
  ctx.params = { id: 2 }
  query.resolves(undefined)

  await deletePost(ctx, next)
  const err = emitter.args[0][1]

  t.true(emitter.calledOnce)
  t.false(next.calledOnce)
  t.is(err.status, 404)
  t.regex(err.message, /No posts with this id were found/)
})
