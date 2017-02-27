import test from 'ava'
import sinon from 'sinon'

import { isLoggedIn } from '..'

test('should call next() if ctx.passport.user exists', t => {
  const ctx = {
    passport: {
      user: { id: 'test' }
    }
  }
  const next = sinon.spy()

  t.notThrows(() => {
    isLoggedIn(ctx, next)
  })
  t.true(next.calledOnce)
})

test('should throw if no ctx.passport.user', t => {
  const ctx = {
    passport: {}
  }
  const next = sinon.spy()
  const err = t.throws(() => {
    isLoggedIn(ctx, next)
  })
  t.is(err.message, 'Unauthorized')
  t.is(err.status, 401)
  t.falsy(next.calledOnce)
})
