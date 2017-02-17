import mongoose from 'mongoose'

import { Post } from '..'
import { expect } from 'chai'

mongoose.Promise = global.Promise

after(() => {
  mongoose.models = {}
  mongoose.modelSchemas = {}
})

describe('Post', () => {
  it('should be invalid if title is empty', done => {
    const post = new Post({
      html: 'testing'
    })

    post.validate(err => {
      expect(err).to.exist
      expect(err.name).to.equal('ValidationError')
      done()
    })
  })

  it('should be invalid if title is not a string', done => {
    const post = new Post({
      title: [],
      html: 'Yay for type checking!'
    })

    post.validate(err => {
      expect(err).to.exist
      expect(err.name).to.equal('ValidationError')
      done()
    })
  })

  it('should be invalid if html is empty', done => {
    const post = new Post({
      title: 'Test'
    })

    post.validate(err => {
      expect(err).to.exist
      expect(err.name).to.equal('ValidationError')
      done()
    })
  })
})
