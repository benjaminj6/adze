import Router from 'koa-router'
import * as controller from '../controller'

const posts = new Router()

import { isLoggedIn } from '~/server/utils'

posts
  .get('/', controller.getPosts)
  .get('/:number', controller.getLimitedPosts)
  .del('/:id', isLoggedIn, controller.deletePost)
  .post('/', isLoggedIn, controller.addPost)
  .patch('/:id', isLoggedIn, controller.editPost)

export default posts
