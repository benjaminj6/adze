import { Post } from '../../models'
import { createError } from '../../utils'
import log from '../../config/logger.js'

export async function getPosts (ctx, next) {
  try {
    const posts = await Post.find().sort('-date')
    ctx.status = 200
    ctx.body = posts
    next()
  } catch (err) {
    err.status = err.status || 404
    ctx.app.emit('error', err, ctx)
  }
}

export async function getLimitedPosts (ctx, next) {
  try {
    const numberOfPosts = parseInt(ctx.params.number)

    if (!numberOfPosts || numberOfPosts <= 0) {
      const err = new Error()
      err.message = 'Posts must be a whole number above 0'
      err.status = 400
      throw err
    }

    const posts = await Post.find()
      .sort('-date')
      .limit(numberOfPosts)

    ctx.status = 200
    ctx.body = posts
    next()
  } catch (err) {
    err.status = err.status || 500
    ctx.app.emit('error', err, ctx)
  }
}

export async function deletePost (ctx, next) {
  try {
    // TODO -- add validation for ctx.params

    const deletedPost = await Post.findByIdAndRemove(ctx.params.id)

    if (!deletedPost) {
      const err = createError(404, 'No posts with this id were found. Please use a valid id')
      throw err
    }

    ctx.status = 200
    ctx.body = 'Post removed successfully'
    next()
  } catch (err) {
    err.status = err.status || 500
    ctx.app.emit('error', err, ctx)
  }
}

export async function addPost (ctx, next) {
  try {
    const { post, title } = JSON.parse(ctx.request.body)

    const newPost = await Post.create({
      title,
      html: post
    })

    ctx.status = 201
    ctx.body = newPost
    next()
  } catch (err) {
    err.status = err.status || 400
    ctx.app.emit('error', err, ctx)
  }
}

export async function editPost (ctx, next) {
  try {
    const id = ctx.params.id
    const update = JSON.parse(ctx.request.body)
    const opts = { runValidators: true, new: true }

    const updatedPost = await Post.findByIdAndUpdate(id, update, opts).exec()

    ctx.status = 200
    ctx.body = updatedPost
    next()
  } catch (err) {
    err.status = err.status || 400
    ctx.app.emit('error', err, ctx)
  }
}
