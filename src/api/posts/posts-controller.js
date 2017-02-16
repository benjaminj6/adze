import { Post } from '../../models'
import log from '../../config/logger'

export async function getPosts (ctx, next) {
  try {
    const posts = await Post.find().sort({ date: -1 })

    ctx.status = 200
    ctx.body = posts

    next()
  } catch (err) {
    err.status = err.status || 404
    ctx.app.emit('error', err, ctx)
  }
}

export function getLimitedPosts (ctx, next) {
  ctx.body = `This will serve ${ctx.params.number} most recent posts in the db`
}

export function deletePost (ctx, next) {
  ctx.body = `This will delete a post with the id ${ctx.params.id}`
}

export async function addPost (ctx, next) {
  try {
    const { post, title } = JSON.parse(ctx.request.body)

    const newPost = await Post.create({
      title,
      html: post
    })

    ctx.body = newPost
    next()
  } catch (err) {
    err.status = err.status || 400
    ctx.app.emit('error', err, ctx)
  }
}

export function editPost (ctx, next) {
  ctx.body = `This will update a post with id ${ctx.params.id}`
}
