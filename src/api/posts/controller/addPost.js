import { Post } from '~/models'
import marked from 'marked'

export default async (ctx, next) => {
  try {
    const { post, title } = ctx.request.body
    const html = await marked(post)

    const newPost = await Post.create({
      title,
      html,
      md: post
    })

    ctx.status = 201
    ctx.body = newPost
    next()
  } catch (err) {
    err.status = err.status || 400
    ctx.app.emit('error', err, ctx)
  }
}
