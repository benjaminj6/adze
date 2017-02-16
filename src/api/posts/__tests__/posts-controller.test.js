import { expect } from 'chai'
import sinon from 'sinon'
import 'sinon-mongoose'
import 'sinon-as-promised'

import { Post } from '../../../models'
import { createPosts } from './test-utils'
import * as controller from '../posts-controller'

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
})
