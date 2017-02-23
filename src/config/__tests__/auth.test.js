import test from 'ava'
import sinon from 'sinon'
import 'sinon-mongoose'
import 'sinon-as-promised'

import { validate } from '../auth'
import { User } from '~/models'

const email = 'test@test.com'
const testPassword = 'test'
const testUser = {
  email,
  password: testPassword,
  validatePassword (password) {
    return password === this.password
  }
}

test.beforeEach(t => {
  sinon.mock(User)
    .expects('findOne').withArgs({ email: 'test@test.com' })
    .chain('exec')
    .resolves(testUser)
})

test.afterEach(t => {
  User.findOne.restore()
})

test.serial('validate() -- should call `done` w/ user if valid', async t => {
  const done = sinon.spy()
  await validate(email, testPassword, done)
  t.true(done.calledOnce)
  t.true(done.calledWith(null, testUser))
})

test.serial('validate() -- should call `done` w/ false if invalid password', async t => {
  const done = sinon.spy()
  await validate(email, 'someotherpasswrod', done)
  t.true(done.calledOnce)
  t.true(done.calledWith(null, false))
})

test.serial('validate() -- should call `done` w/ err if error thrown', async t => {
  const done = sinon.spy()
  await validate(undefined, 'test', done)
  t.true(done.calledOnce)
  t.regex(done.args[0][0], /Error/)
})
