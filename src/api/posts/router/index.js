import Router from 'koa-router'
import * as controller from '../controller'

const posts = new Router()

import { isLoggedIn } from '~/utils'

posts
  .get('/', controller.getPosts)
  .get('/:number', controller.getLimitedPosts)
  .del('/delete/:id', isLoggedIn, controller.deletePost)
  .post('/add', isLoggedIn, controller.addPost)
  .put('/edit/:id', isLoggedIn, controller.editPost)

export default posts
