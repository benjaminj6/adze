export default ({ tags }, tagId) => ({
  tags: tags.filter(t => t._id !== tagId)
})
