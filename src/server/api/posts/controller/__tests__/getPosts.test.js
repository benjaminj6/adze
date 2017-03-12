import test from 'ava'
import sinon from 'sinon'
import 'sinon-mongoose'
import 'sinon-as-promised'

import { Post } from '~/server/models'
import { createPosts } from '~/server/utils/test-utils'
import { getPosts } from '..'

let query
let next
let ctx = {
  app: { emit: () => {} }
}

test.beforeEach(() => {
  query = sinon.mock(Post)
    .expects('find')
    .chain('sort').withArgs('-date')
    .chain('populate').withArgs('tags')
  next = sinon.spy()
})

test.afterEach(() => {
  Post.find.restore()
  next.reset()
  query.reset()
})

test.serial('getPosts() -- should return posts from db by most recent (200)', async t => {
  query.resolves(createPosts(5))
  await getPosts(ctx, next)

  t.is(ctx.status, 200)
  t.true(ctx.body.length === 5)
  t.false(next.calledOnce)
})

test.serial('getPosts() -- should propagate error (404)', async t => {
  query.rejects(new Error('test'))
  const emitter = sinon.spy(ctx.app, 'emit')

  await getPosts(ctx, next)
  const err = emitter.args[0][1]

  t.is(err.status, 404)
  t.is(err.message, 'test')
  t.true(emitter.calledOnce)
})

test.todo('should propagate error if tags are not an array')
