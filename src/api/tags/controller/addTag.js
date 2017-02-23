import { Tag } from '~/models'

export default async (ctx, next) => {
  try {
    const { name, color } = ctx.request.body
    const newTag = await Tag.create({
      name,
      color
    })

    ctx.status = 201
    ctx.body = newTag
    return next()
  } catch (err) {
    err.status = err.status || 404
    ctx.app.emit('error', err, ctx)
  }
}
