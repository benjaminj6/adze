import test from 'ava'
import sinon from 'sinon'
import 'sinon-mongoose'
import 'sinon-as-promised'
28

import { Post } from '~/models'
import { createPosts } from '~/utils/test-utils'
import { addPost } from '..'
import { createError } from '~/utils'

test.beforeEach(t => {
  t.context.query = sinon.mock(Post).expects('create')
  t.context.next = sinon.spy()
  t.context.ctx = {
    app: {
      emit: () => {}
    }
  }
  t.context.emitter = sinon.spy(t.context.ctx.app, 'emit')
})

test.afterEach.always(t => {
  Post.create.restore()
  t.context.ctx.app.emit.restore()
  t.context.next.reset()
  t.context.emitter.reset()
  t.context = {}
})

test.serial('addPost() -- should return the newly created post (201)', async t => {
  const { ctx, query, next, emitter } = t.context
  ctx.request = { body: { title: 'test', post: 'test' } }
  query
    .withArgs({
      title: 'test',
      html: '<p>test</p>\n',
      md: 'test'
    })
    .resolves(createPosts(1))

  await addPost(ctx, next)
  t.is(ctx.status, 201)
  t.is(ctx.body.md, 'test-0')
  t.true(next.calledOnce)
  t.false(emitter.calledOnce)
})

test.serial('addPost() -- should propagate err if invalid JSON (400)', async t => {
  const { ctx, next, emitter } = t.context
  ctx.request = { body: 'test string' }

  await addPost(ctx, next)
  const err = emitter.args[0][1]

  t.true(emitter.calledOnce)
  t.false(next.calledOnce)
  t.is(err.status, 400)
  t.regex(err.message, /Cannot read property/)
  t.regex(err.message, /undefined/)
})

test.serial('addTest() -- should propagate err if post not created', async t => {
  const { ctx, query, next, emitter } = t.context
  ctx.request = { body: { title: 'test', post: 'test' } }
  query
    .withArgs({
      title: 'test',
      html: '<p>test</p>\n',
      md: 'test'
    })
    .rejects(createError(500, 'test'))

  await addPost(ctx, next)
  const err = emitter.args[0][1]

  t.true(emitter.calledOnce)
  t.false(next.calledOnce)
  t.is(err.status, 500)
  t.is(err.message, 'test')
})
