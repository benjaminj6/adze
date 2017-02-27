import test from 'ava'
import { Post } from '..'

async function validationErrorTest (t, input) {
  const post = new Post(input)

  const err = await t.throws(post.validate())
  t.is(err.name, 'ValidationError')
}

validationErrorTest.title = (message) => `post-model -- ${message}`

test(
  'fails validation if empty title',
  validationErrorTest,
  { html: 'testing' }
)

test(
  'fails validation if title not string',
  validationErrorTest,
  { title: [], html: 'Yay for type checking!' }
)

test(
  'fails validation if empty html',
  validationErrorTest,
  { title: 'test' }
)

test(
  'fails validation if no md',
  validationErrorTest,
  { title: 'test', html: 'test' }
)
