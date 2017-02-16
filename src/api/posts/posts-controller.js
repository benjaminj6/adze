import { Post } from '../../models'
import log from '../../config/logger'

export function getPosts (ctx, next) {
  ctx.body = 'This will serve ALL of the posts in the db'
}

export function getLimitedPosts (ctx, next) {
  ctx.body = `This will serve ${ctx.params.number} most recent posts in the db`
}

export function deletePost (ctx, next) {
  ctx.body = `This will delete a post with the id ${ctx.params.id}`
}

export async function addPost (ctx, next) {
  try {
    const newPost = await Post.create({
      title: [],
      html: 'something else'
    })

    log.debug()
    log.debug(`The html reads -- ${newPost.html}`)
    ctx.body = 'This will add a post in the user\'s posts'
  } catch (err) {
    log.debug(`[ERR] ${err.name}: ${err.message}`)
    next(err)
  }
}

export function editPost (ctx, next) {
  ctx.body = `This will update a post with id ${ctx.params.id}`
}
