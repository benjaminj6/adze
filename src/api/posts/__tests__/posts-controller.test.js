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
    })

    afterEach(() => {
      mockQuery.reset()
    })
  })
})
