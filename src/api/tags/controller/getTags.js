import { Tag } from '~/models'

export default async (ctx, next) => {
  try {
    const tags = await Tag.find().exec()
    ctx.status = 200
    ctx.body = tags
  } catch (err) {

  }
}
