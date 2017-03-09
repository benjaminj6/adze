import marked from 'marked'
import { Post, Tag } from '~/server/models'
import { validateTagArray } from '~/server/utils'
import { isMongoId } from 'validator'

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
      const newTags = tags.filter(t => !isMongoId(t._id))
      const promises = newTags.map(t => Tag.create({
        name: t.title,
        color: t.color
      }))

      Promise.all(promises).then(res => console.log(res))
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
