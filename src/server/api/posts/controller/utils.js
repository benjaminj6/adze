// TODO: Figure out WHERE to put this specifically... in a mongoose static?
import { isMongoId } from 'validator'
import { log } from '~/server/config'
import { Tag } from '~/server/models'

export const createNewTags = async tags => {
  const newTags = tags.filter(t => !isMongoId(t._id))
  log.debug('newTags', newTags)

  const promises = newTags.map(({ name, color }) => Tag.create({
    name,
    color
  }))

  const savedNewTags = await Promise.all(promises)
  log.debug('savedNewTags', savedNewTags)

  return tags.filter(t => isMongoId(t._id))
    .concat(savedNewTags)
    .map(t => t._id)
}
