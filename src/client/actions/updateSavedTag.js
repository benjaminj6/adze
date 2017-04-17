export default ({ tags, newTagData }, tag) => ({
  tags: tags.map(t => t._id === tag._id ? tag : t),
  newTagData: tag,
  newTagDataSaved: true
})
