import test from 'ava'
import mongoose from 'mongoose'
mongoose.Promise = global.Promise

import session from 'supertest-session'

import { start } from '~/server'
import { populateDB, clearDB } from '~/utils/test-utils'

let server
let req

test.before(async t => {
  server = await start()
  req = session(server)

  await req.post('/api/auth/login')
    .send({ email: 'test@test.com', password: 'test' })
})

test.beforeEach(async t => {
  const dbResults = await populateDB(5)
  t.context.postId = dbResults[0].id
})

test.afterEach.always(async t => {
  await clearDB()
})

test.after.always(async t => {
  await mongoose.disconnect()
  await server.close()
})

test.serial('GET /api/posts -- should return posts', async t => {
  const { body } = await req.get('/api/posts').expect(200)
  t.is(body.length, 5)
})

test.serial('GET /api/posts/:number -- should return number of posts', async t => {
  const { body } = await req.get('/api/posts/2').expect(200)
  t.is(body.length, 2)
})

test.serial('DELETE /api/posts/delete/:id -- should return confirmation message', async t => {
  const { text } = await req.delete(`/api/posts/delete/${t.context.postId}`).expect(200)
  t.is(text, 'Post removed successfully')
})

test.serial('POST /api/posts/add -- should return added item', async t => {
  const { body } = await req.post('/api/posts/add')
    .send({ title: 'test', post: 'test' })
    .expect(201)

  t.true(body.toString() === '[object Object]')
  t.is(body.title, 'test')
  t.regex(body.html, /<p>test<\/p>/)
  t.is(body.md, 'test')
})

test.serial('PUT /api/edit/:id -- should return the edited item', async t => {
  const { body } = await req.put(`/api/posts/edit/${t.context.postId}`)
    .send({ title: 'something new test' })
    .expect(200)

  t.is(body.title, 'something new test')
  t.truthy(body.html)
  t.truthy(body.md)
})
