import createError from '../errorGenerator'
import { expect } from 'chai'

describe('errorGenerator', () => {
  it('should return an error with the given status/message', () => {
    const err = createError(500, 'this is an error')
    expect(err.status).to.equal(500)
    expect(err.message).to.equal('this is an error')
  })
})
