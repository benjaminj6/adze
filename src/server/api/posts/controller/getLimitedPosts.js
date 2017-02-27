import { Post } from '~/server/models'

export default async (ctx, next) => {
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
      .populate('tags')

    ctx.status = 200
    ctx.body = posts
    next()
  } catch (err) {
    ctx.app.emit('error', err, ctx)
  }
}
