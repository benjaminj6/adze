import { Post } from '~/server/models'
import { createError } from '~/server/utils'

export default async (ctx, next) => {
  try {
    const deletedPost = await Post.findByIdAndRemove(ctx.params.id)

    if (!deletedPost) {
      const err = createError(404, 'No posts with this id were found. Please use a valid id')
      throw err
    }

    ctx.status = 200
    ctx.body = 'Post removed successfully'
  } catch (err) {
    err.status = err.status
    ctx.app.emit('error', err, ctx)
  }
}
