import marked from 'marked'
import { Post } from '~/server/models'
import { validateTagArray } from '~/server/utils'
import { createNewTags } from './utils'

import { log } from '~/server/config'

export default async (ctx, next) => {
  try {
    const id = ctx.params.id
    const opts = { runValidators: true, new: true }

    const updates = {}
    const { post, title, tags } = ctx.request.body

    if (title) {
      updates.title = title
    }

    let html
    if (post) {
      html = await marked(post)

      updates.md = post
      updates.html = html
    }

    if (validateTagArray(tags)) {
      log.debug(tags)

      updates.tags = await createNewTags(tags)

      log.debug('updates tags', updates.tags)
    }

    const updatedPost = await Post.findByIdAndUpdate(id, updates, opts)
      .populate('tags')
      .exec()

    ctx.status = 200
    ctx.body = updatedPost
  } catch (err) {
    err.status = err.status || 400
    ctx.app.emit('error', err, ctx)
  }
}
