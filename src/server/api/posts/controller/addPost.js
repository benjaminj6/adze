import marked from 'marked'
import { Post } from '~/server/models'
import { validateTagArray } from '~/server/utils'
import { createNewTags } from './utils'

import { log } from '~/server/config'

export default async (ctx, next) => {
  log.debug('runs this controller')
  try {
    const { post, title, tags } = ctx.request.body
    const html = await marked(post)

    const newPost = {
      title,
      html,
      md: post
    }

    if (validateTagArray(tags)) {
      newPost.tags = await createNewTags(tags)
    }

    const created = await Post.create(newPost)
      .then(doc => Post.populate(doc, { path: 'tags' }))

    ctx.status = 201
    ctx.body = created
  } catch (err) {
    err.status = err.status || 400
    ctx.app.emit('error', err, ctx)
  }
}
