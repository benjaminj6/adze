import test from 'ava'
import sinon from 'sinon'
import 'sinon-mongoose'
import 'sinon-as-promised'
import proxyquire from 'proxyquire'

import { Post } from '~/server/models'
import { createPosts } from '~/server/utils/test-utils'
import { createError } from '~/server/utils'

// imports addPost and stubs its dependencies
const { default: editPost } = proxyquire('../editPost', {
  './utils': {
    createNewTags: sinon.stub().resolves([ '12345' ])
  }
})

test.beforeEach(t => {
  t.context.query = sinon.mock(Post).expects('findByIdAndUpdate')
  t.context.next = sinon.spy()
  t.context.ctx = {
    app: { emit: () => {} }
  }
  t.context.emitter = sinon.spy(t.context.ctx.app, 'emit')
})

test.afterEach(t => {
  Post.findByIdAndUpdate.restore()
  t.context.next.reset()
  t.context.emitter.reset()
  t.context.ctx.app.emit.reset()
})

test.serial('editPost() -- should return the edited post (200)', async t => {
  const { ctx, query, next, emitter } = t.context
  ctx.params = { id: 2 }
  ctx.request = { body: { title: 'test', post: 'test', tags: ['12345'] } }
  query
    .withArgs(2, {
      title: 'test',
      html: '<p>test</p>\n',
      md: 'test',
      tags: ['12345']
    })
    .chain('exec')
    .resolves(createPosts(1))

  await editPost(ctx, next)
  t.is(ctx.status, 200)
  t.is(ctx.body.title, 'test-0') // Mock returns from the utility function ... NOT from request
  t.is(ctx.body.md, 'test-0')
  t.is(ctx.body.html, '<p>test-0</p>')
  t.false(next.calledOnce)
  t.false(emitter.calledOnce)
})

test.serial('editPost() -- should propagate err with default status (400)', async t => {
  const { ctx, query, next, emitter } = t.context
  ctx.params = { id: 'foo' }
  ctx.request = { body: { title: 'test' } }
  query
    .withArgs('foo', {
      title: 'test'
    })
    .chain('populate').withArgs('tags')
    .chain('exec')
    .rejects(new Error('test'))

  await editPost(ctx, next)
  const err = emitter.args[0][1]

  t.true(emitter.calledOnce)
  t.false(next.calledOnce)
  t.is(err.status, 400)
  t.is(err.message, 'test')
})

test.serial('editPost() -- should propagate err with specified error status', async t => {
  const { ctx, query, next, emitter } = t.context
  ctx.params = { id: 'foo' }
  ctx.request = { body: { post: 'test' } }
  query
    .withArgs('foo', {
      html: '<p>test</p>\n',
      md: 'test'
    })
    .chain('populate').withArgs('tags')
    .chain('exec')
    .rejects(createError(500, 'test'))

  await editPost(ctx, next)
  const err = emitter.args[0][1]

  t.true(emitter.calledOnce)
  t.false(next.calledOnce)
  t.is(err.status, 500)
  t.is(err.message, 'test')
})

test.todo('should propagate error if tags are not an array')
