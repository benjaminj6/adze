import koaBody from 'koa-body'
import Router from 'koa-router'
import * as controller from './posts-controller'

const bodyParser = koaBody()

const posts = new Router()

posts
  .get('/', controller.getPosts)
  .get('/:number', controller.getLimitedPosts)
  .del('/delete/:id', controller.deletePost)
  .post('/add', bodyParser, controller.addPost)
  .put('/edit/:id', bodyParser, controller.editPost)

export default posts
