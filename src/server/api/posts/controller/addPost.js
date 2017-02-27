import marked from 'marked'
import { Post } from '~/models'
import { validateTagArray } from '~/utils'

export default async (ctx, next) => {
  try {
    const { post, title, tags } = ctx.request.body
    const html = await marked(post)

    const newPost = {
      title,
      html,
      md: post
    }

    if (validateTagArray(tags)) {
      newPost.tags = tags
    }

    const created = await Post.create(newPost)
      .then(doc => Post.populate(doc, { path: 'tags' }))

    ctx.status = 201
    ctx.body = created
    next()
  } catch (err) {
    err.status = err.status || 400
    ctx.app.emit('error', err, ctx)
  }
}
