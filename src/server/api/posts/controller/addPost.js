import marked from 'marked'
import { Post, Tag } from '~/server/models'
import { validateTagArray } from '~/server/utils'
import { isMongoId } from 'validator'

import { log } from '~/server/config'

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
      log.debug('tags', tags)
      const newTags = tags.filter(t => !isMongoId(t._id))
      log.debug('newTags', newTags)
      const promises = newTags.map(({ name, color }) => Tag.create({
        name,
        color
      }))

      const savedNewTags = await Promise.all(promises)
      log.debug('savedNewTags', savedNewTags)
      newPost.tags = tags.filter(t => isMongoId(t._id))
        .concat(savedNewTags)
        .map(t => t._id)
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
