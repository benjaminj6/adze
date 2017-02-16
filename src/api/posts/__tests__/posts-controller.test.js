import { expect } from 'chai'
import sinon from 'sinon'
import 'sinon-mongoose'
import 'sinon-as-promised'

import { Post } from '../../../models'
import { createPosts } from './test-utils'
import * as controller from '../posts-controller'
import { createError } from '../../../utils'

describe('posts-controller', () => {
  let ctx = {}
  let next
  let mockQuery

  describe('getPosts()', () => {
    beforeEach(() => {
      mockQuery = sinon.mock(Post)
         .expects('find')
         .chain('sort').withArgs('-date')
      next = sinon.spy()
    })

    afterEach(() => {
      Post.find.restore()
      ctx = {}
      next.reset()
      mockQuery.reset()
    })

    it('should return posts from the db in order by most recent', async () => {
      mockQuery.resolves(createPosts(5))
      await controller.getPosts(ctx, next)

      expect(ctx.status).to.equal(200)
      expect(ctx.body).to.have.length(5)
      expect(next.calledOnce).to.be.true
    })

    it('should throw with status 404', async () => {
      ctx.app = { emit: () => {} }
      const spyEmitter = sinon.spy(ctx.app, 'emit')

      const testError = new Error('test error')
      mockQuery.rejects(testError)

      await controller.getPosts(ctx, next)

      expect(spyEmitter.args[0][1].status).to.equal(404)
      expect(spyEmitter.calledOnce).to.be.true
      expect(spyEmitter.calledWith('error', testError, ctx)).to.be.true
    })
  })

  describe('getLimitedPosts()', () => {
    beforeEach(() => {
      mockQuery = sinon.mock(Post)
        .expects('find')
        .chain('sort').withArgs('-date')
      next = sinon.spy()
    })

    afterEach(() => {
      Post.find.restore()
      ctx = {}
      mockQuery.reset()
      next.reset()
    })

    it('should return amount of posts that user requests', async () => {
      ctx.params = { number: 3 }

      mockQuery
        .chain('limit').withArgs(3)
        .resolves(createPosts(3))

      await controller.getLimitedPosts(ctx, next)
      expect(ctx.status).to.equal(200)
      expect(ctx.body).to.have.length(3)
      expect(next.calledOnce).to.be.true
    })

    it('should throw if `ctx.params.number` is absent (400)', async () => {
      ctx.app = { emit: () => {} }
      ctx.params = {}
      const spyEmitter = sinon.spy(ctx.app, 'emit')

      mockQuery
        .chain('limit').withArgs(3)
        .resolves(createPosts(3))

      await controller.getLimitedPosts(ctx, next)

      expect(spyEmitter.calledOnce).to.be.true
      expect(spyEmitter.args[0][1].status).to.equal(400)
      expect(spyEmitter.args[0][1].message).to.equal('Posts must be a whole number above 0')
    })

    it('should throw if `ctx.params.number` is 0 (400)', async () => {
      ctx.app = { emit: () => {} }
      ctx.params = { number: 0 }
      const spyEmitter = sinon.spy(ctx.app, 'emit')

      mockQuery
        .chain('limit').withArgs(3)
        .resolves(createPosts(3))

      await controller.getLimitedPosts(ctx, next)

      expect(spyEmitter.calledOnce).to.be.true
      expect(spyEmitter.args[0][1].status).to.equal(400)
      expect(spyEmitter.args[0][1].message).to.equal('Posts must be a whole number above 0')
    })

    it('should throw with default error status if error status is not given (500)', async () => {
      ctx.app = { emit: () => {} }
      ctx.params = { number: 2 }
      const spyEmitter = sinon.spy(ctx.app, 'emit')

      mockQuery
        .chain('limit').withArgs(2)
        .rejects(new Error('test error'))

      await controller.getLimitedPosts(ctx, next)
      expect(spyEmitter.calledOnce).to.be.true
      expect(spyEmitter.args[0][1].status).to.equal(500)
    })
  })

  describe('deletePost()', () => {
    beforeEach(() => {
      mockQuery = sinon.mock(Post)
      next = sinon.spy()
    })

    afterEach(() => {
      ctx = {}
      mockQuery.restore()
      next.reset()
    })

    it('should return the deleted item', async () => {
      ctx.params = { id: 2 }
      mockQuery
        .expects('findByIdAndRemove').withArgs(2)
        .resolves(createPosts(1))

      await controller.deletePost(ctx, next)
      expect(ctx.status).to.equal(200)
      expect(ctx.body).to.equal('Post removed successfully')
      expect(next.calledOnce).to.be.true
    })

    it('should throw if deleted post query returns nothing', async () => {
      ctx.params = { id: 3 }
      ctx.app = { emit: () => {} }
      const spyEmitter = sinon.spy(ctx.app, 'emit')

      mockQuery
        .expects('findByIdAndRemove').withArgs(3)
        .resolves(undefined)

      await controller.deletePost(ctx, next)
      expect(spyEmitter.calledOnce).to.be.true
      expect(spyEmitter.args[0][1].status).to.equal(404)
      expect(spyEmitter.args[0][1].message).to.have.string('No posts with this id were found')
    })
  })

  describe('addPost()', () => {
    beforeEach(() => {
      mockQuery = sinon.mock(Post)
      next = sinon.spy()
    })

    afterEach(() => {
      ctx = {}
      mockQuery.restore()
      next.reset()
    })

    it('should return new post if valid', async () => {
      ctx.request = { body: JSON.stringify({ title: 'title', post: 'html' }) }
      mockQuery
        .expects('create').withArgs({ title: 'title', html: 'html' })
        .resolves(createPosts(1))

      await controller.addPost(ctx, next)
      expect(ctx.status).to.equal(201)
      expect(ctx.body).to.have.length(1)
      expect(next.calledOnce).to.be.true
    })

    it('should throw if invalid JSON is supplied (400)', async () => {
      ctx.request = { body: 'I am a string' }
      ctx.app = { emit: () => {} }
      const spyEmitter = sinon.spy(ctx.app, 'emit')

      await controller.addPost(ctx, next)
      expect(spyEmitter.calledOnce).to.equal(true)
      expect(spyEmitter.args[0][1].status).to.equal(400)
      expect(spyEmitter.args[0][1].message).to.match(/(Unexpected token)|(JSON)/)
    })

    it('should throw if Post is not created', async () => {
      const mockError = createError(500, 'test error')
      ctx.request = { body: JSON.stringify({ title: 'title', post: 'html' }) }
      ctx.app = { emit: () => {} }
      const spyEmitter = sinon.spy(ctx.app, 'emit')
      mockQuery
        .expects('create').withArgs({ title: 'title', html: 'html' })
        .rejects(mockError)

      await controller.addPost(ctx, next)
      expect(spyEmitter.calledOnce).to.be.true
      expect(spyEmitter.args[0][1].message).to.equal(mockError.message)
      expect(spyEmitter.args[0][1].status).to.equal(mockError.status)
    })
  })

  describe('editPost()', () => {
    beforeEach(() => {
      mockQuery = sinon.mock(Post)
      next = sinon.spy()
    })

    afterEach(() => {
      ctx = {}
      mockQuery.restore()
      next.reset()
    })

    it('should return the edited post', async () => {
      ctx.params = { id: 2 }
      ctx.request = { body: JSON.stringify({ title: 'new title' }) }
      mockQuery
        .expects('findByIdAndUpdate').withArgs(2)
        .chain('exec')
        .resolves(createPosts(1))

      await controller.editPost(ctx, next)
      expect(ctx.status).to.equal(200)
      expect(ctx.body).to.have.length(1)
      expect(next.calledOnce).to.be.true
    })

    it('should propagate error with default status if status not specified', async () => {
      ctx.params = { id: 'foo' }
      ctx.request = { body: JSON.stringify({ title: 'new title' }) }

      ctx.app = { emit: () => {} }
      const spyEmitter = sinon.spy(ctx.app, 'emit')

      mockQuery
        .expects('findByIdAndUpdate').withArgs('foo')
        .chain('exec')
        .rejects(new Error('test error'))

      await controller.editPost(ctx, next)
      expect(spyEmitter.calledOnce).to.be.true
      expect(spyEmitter.args[0][1].status).to.equal(400)
    })

    it('should propagate with error status if status is specified', async () => {
      ctx.params = { id: 'foo' }
      ctx.request = { body: JSON.stringify({ title: 'new title' }) }

      ctx.app = { emit: () => {} }
      const spyEmitter = sinon.spy(ctx.app, 'emit')

      mockQuery
        .expects('findByIdAndUpdate').withArgs('foo')
        .chain('exec')
        .rejects(createError(500, 'test error'))

      await controller.editPost(ctx, next)
      expect(spyEmitter.calledOnce).to.be.true
      expect(spyEmitter.args[0][1].status).to.equal(500)
    })
  })
})
