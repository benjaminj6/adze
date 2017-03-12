import { Tag } from '~/server/models'

export default async (ctx, next) => {
  try {
    const { name, color } = ctx.request.body

    const newTag = { name }

    if (color) {
      newTag.color = color
    }

    const created = await Tag.create(newTag)

    ctx.status = 201
    ctx.body = created
  } catch (err) {
    err.status = err.status || 400
    ctx.app.emit('error', err, ctx)
  }
}
