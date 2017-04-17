export default ({ tags }, tagId) => ({
  newTagDataSaved: true,
  newTagData: tags.find(t => t._id === tagId)
})
