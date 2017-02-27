import test from 'ava'
import { Tag } from '..'

test('Should pass validation', t => {
  const tag = new Tag({
    name: 'test',
    color: '#000'
  })

  t.notThrows(tag.validate())
  t.is(tag.name, 'test')
  t.is(tag.color, '#000')
})

test('should pass validation if no color', t => {
  const tag = new Tag({
    name: 'test'
  })

  t.notThrows(tag.validate())
  t.is(tag.name, 'test')
})

async function errorTest (t, input) {
  const tag = new Tag(input)
  const err = await t.throws(tag.validate())
  t.is(err.name, 'ValidationError')
}

test(
  'should fail validation if no name',
  errorTest,
  { color: '#000' }
)

test(
  'should fail validation if name is not a String',
  errorTest,
  { name: [] }
)

test(
  'should fail validation if color is not a String',
  errorTest,
  { name: 'test', color: [] }
)

test(
  'should fail validation if color is not a hexadecimal',
  errorTest,
  { name: 'test', color: 'test' }
)
