import Router from 'koa-router'
import { Post } from `../../models`

const posts = new Router()

posts.get('/', (ctx, next) => {
  ctx.body = 'This will serve ALL of the posts in teh db'
})

posts.get('/:number', (ctx, next) => {
  ctx.body = 'This will serve __ most recent posts in the db'
})


