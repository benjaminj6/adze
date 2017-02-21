import createError from '../errorGenerator'
import test from 'ava'

test('errorGenerator -- returns error from status/message', t => {
  const err = createError(500, 'test')
  t.is(err.status, 500)
  t.is(err.message, 'test')
})
