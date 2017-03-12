import { Tag } from '~/server/models'

export default async (ctx, next) => {
  try {
    const tags = await Tag.find().exec()
    ctx.status = 200
    ctx.body = tags
  } catch (err) {
    err.status = err.status || 404
    ctx.app.emit('error', err, ctx)
  }
}
