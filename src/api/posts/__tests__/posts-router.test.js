import { expect } from 'chai'
import { start } from '../../../server'
import supertest from 'supertest'
import mongoose from 'mongoose'
import { populateDB, clearDB } from './test-utils'

describe('posts-router', () => {
  let request
  let server
  let postID
  before(async () => {
    server = await start()
    request = supertest(server)
  })

  beforeEach(async () => {
    const dbResults = await populateDB(5)
    postID = dbResults[0].id
  })

  afterEach(async () => {
    clearDB()
  })

  after(() => {
    mongoose.disconnect()
    server.close()
  })

  describe('posts-router', () => {
    describe('GET /api/posts', () => {
      it('should return posts (200)', done => {
        request
          .get('/api/posts/')
          .expect(200)
          .end((err, { body, status }) => {
            expect(err).to.be.null
            expect(body).to.have.length(5)
            done()
          })
      })
    })

    describe('GET /api/posts/:number', () => {
      it('should return a limited amount of posts (200)', done => {
        request
          .get('/api/posts/3')
          .expect(200)
          .end((err, { body, status }) => {
            expect(err).to.be.null
            expect(body).to.have.length(3)
            done()
          })
      })
    })

    describe('DELETE /api/posts/delete/:id', () => {
      it('should return a confirmation message (200)', done => {
        request
          .delete(`/api/posts/delete/${postID}`)
          .expect(200)
          .end((err, { text }) => {
            expect(err).to.be.null
            expect(text).to.equal('Post removed successfully')
            done()
          })
      })
    })

    describe('POST /api/posts/add', () => {
      it('should return the added item (201)', done => {
        request
          .post('/api/posts/add/')
          .send({ title: 'title', post: 'html' })
          .expect(201)
          .end((err, { body }) => {
            expect(err).to.be.null
            expect(body).to.be.a('object')
            expect(body).to.have.property('title')
            expect(body.title).to.equal('title')
            expect(body).to.have.property('html')
            expect(body.html).to.equal('html')
            done()
          })
      })
    })

    describe('PUT /api/edit/:id', () => {
      it('should return the edited post (200)', done => {
        request
          .put(`/api/posts/edit/${postID}`)
          .send({ title: 'new title' })
          .expect(200)
          .end((err, { body }) => {
            expect(err).to.be.null
            expect(body).to.have.property('title')
            expect(body.title).to.equal('new title')
            expect(body).to.have.property('html')
            done()
          })
      })
    })
  })
})
