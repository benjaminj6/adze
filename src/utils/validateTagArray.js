import { createError } from './index'

export default tags => {
  if (!Array.isArray(tags)) {
    throw createError(400, 'Tags must be an array')
  }

  return tags
}
