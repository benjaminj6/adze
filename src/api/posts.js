import Router from 'koa-router'
import { Post } from '../models'

const posts = new Router()

posts.get('/', (ctx, next) => {
  ctx.body = 'This will serve ALL of the posts in the db'
})

posts.get('/:number', (ctx, next) => {
  ctx.body = `This will serve ${ctx.params.number} most recent posts in the db`
})

posts.del('/delete/:id', (ctx, next) => {
  ctx.body = `This will delete a post with the id ${ctx.params.id}`
})

posts.post('/add', (ctx, next) => {
  ctx.body = 'This will add a post in the user\'s posts'
})

posts.put('/edit/:id', (ctx, next) => {
  ctx.body = `This will update a post with id ${ctx.params.id}`
})

export default posts
