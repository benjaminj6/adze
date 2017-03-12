import test from 'ava'
import sinon from 'sinon'
import 'sinon-mongoose'
import 'sinon-as-promised'
import proxyquire from 'proxyquire'

import { Post } from '~/server/models'
import { createPosts } from '~/server/utils/test-utils'
import { createError } from '~/server/utils'

// imports addPost and stubs its dependencies
const { default: addPost } = proxyquire('../addPost', {
  './utils': {
    createNewTags: sinon.stub().resolves([ '12345' ])
  }
})

test.beforeEach(t => {
  t.context.create = sinon.mock(Post).expects('create')
  t.context.query = sinon.mock(Post).expects('populate').resolves(createPosts(1))
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
  Post.populate.restore()
  t.context.ctx.app.emit.restore()
  t.context.next.reset()
  t.context.emitter.reset()
  t.context = {}
})

test.serial('addPost() -- should return the newly created post (201)', async t => {
  const { ctx, create, next, emitter } = t.context
  ctx.request = { body: { title: 'test', post: 'test' } }
  create
    .withArgs({
      title: 'test',
      html: '<p>test</p>\n',
      md: 'test'
    })
    .resolves(createPosts(1))

  await addPost(ctx, next)
  t.is(ctx.status, 201)
  t.is(ctx.body.md, 'test-0')
  t.false(next.calledOnce)
  t.false(emitter.calledOnce)
})

test.serial('should return newly created Posts with tags if tags provided', async t => {
  const { ctx, create, next, emitter } = t.context
  const tags = ['12345']
  ctx.request = { body: { title: 'test', post: 'test', tags } }

  create
    .withArgs({
      title: 'test',
      html: '<p>test</p>\n',
      'md': 'test',
      tags
    })
    .resolves(createPosts(1))

  await addPost(ctx, next)
  t.is(ctx.status, 201)
  t.false(next.calledOnce)
  t.false(emitter.calledOnce)
})

test.serial('should propagate err if invalid JSON (400)', async t => {
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

test.serial('should propagate err if post not created', async t => {
  const { ctx, create, next, emitter } = t.context
  ctx.request = { body: { title: 'test', post: 'test' } }
  create
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

test.serial('should propagate error if tags are not an array', async t => {
  const { ctx, next, emitter } = t.context
  ctx.request = { body: { title: 'test', post: 'test', tags: '[arraystring]' } }

  await addPost(ctx, next)
  const err = emitter.args[0][1]

  t.true(emitter.calledOnce)
  t.false(next.calledOnce)
  t.is(err.status, 400)
  t.is(err.message, 'Tags must be an array')
})
