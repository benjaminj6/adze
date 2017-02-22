import test from 'ava'
import { User } from '..'

test('User -- should pass validation', t => {
  const user = new User({
    email: 'test@test.com',
    password: 'test'
  })

  t.notThrows(user.validate())
  t.is(user.email, 'test@test.com')
  t.is(user.password, 'test')
})

async function errorTest (t, input) {
  const user = new User(input)
  const err = await t.throws(user.validate())
  t.is(err.name, 'ValidationError')
}

test(
  'User -- should fail validation if no email',
  errorTest,
  { password: 'test' }
)

test(
  'User -- should fail validation if no password',
  errorTest,
  { email: 'test@test.com' }
)

test(
  'User -- should fail validation if email has no `@`',
  errorTest,
  { email: 'testtesttest.com', password: 'test' }
)

test(
  'User -- should fail validation if email has no `.TLD`',
  errorTest,
  { email: 'test@test', password: 'test' }
)

test(
  'User -- should fail validation if email is not a string',
  errorTest,
  { email: [], password: 'test' }
)

test(
  'User -- should fail validation if email is blank before `@`',
  errorTest,
  { email: '@test.com', password: 'test' }
)

test(
  'User -- should fail validation if password is not a string',
  errorTest,
  { email: 'test@test.com', password: [] }
)

test('User.hashPassword() -- should hash password', async t => {
  const hash = await User.hashPassword('string')
  t.not(hash, 'string')
})

test('User.hashPassword() -- should return error', async t => {
  const err = await t.throws(User.hashPassword())
  t.is(err.message, 'Encryption failed')
})
