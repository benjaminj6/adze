import { expect } from 'chai'
import sinon from 'sinon'
import 'sinon-mongoose'
import 'sinon-as-promised'

import { Post } from '../../../models'
import { createPosts } from './test-utils'
import * as controller from '../posts-controller'

describe('posts-controller', () => {
  describe('getPosts()', () => {
    let ctx = {}
    let next
    let mock

    beforeEach(() => {
      mock = sinon.mock(Post)
         .expects('find')
         .chain('sort').withArgs('-date')
      next = sinon.spy()
    })

    afterEach(() => {
      Post.find.restore()
      next.reset()
      mock.reset()
    })

    it('should return posts from the db in order by most recent', async () => {
      mock.resolves(createPosts(5))
      await controller.getPosts(ctx, next)

      expect(ctx.status).to.equal(200)
      expect(ctx.body).to.have.length(5)
      expect(next.calledOnce).to.be.true
    })
  })
})
