import body from 'koa-bodyparser'
import Router from 'koa-router'
import * as controller from '../controller'

const posts = new Router()

posts
  .get('/', controller.getPosts)
  .get('/:number', controller.getLimitedPosts)
  .del('/delete/:id', controller.deletePost)
  .post('/add', body(), controller.addPost)
  .put('/edit/:id', body(), controller.editPost)

export default posts
