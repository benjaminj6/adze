import { expect } from 'chai'
import { start } from '../../../server'
import supertest from 'supertest'
import mongoose from 'mongoose'
import { populateDB, clearDB } from './test-utils'

describe('posts-router', () => {
  let request
  let server
  before(async () => {
    server = await start()
    request = supertest(server)
  })

  beforeEach(async () => {
    await populateDB(5)
  })

  afterEach(async () => {
    clearDB()
  })

  after(() => {
    mongoose.disconnect()
    server.close()
  })

  describe('posts-router', () => {
    it('GET /', done => {
      request
        .get('/api/posts/')
        .expect(200)
        .end((err, res) => {
          expect(res)
          done()
        })
    })
  })
})
