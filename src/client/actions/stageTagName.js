export default ({ newTagData, tag }, name) => ({
  newTagDataSaved: false,
  newTagData: {
    ...newTagData,
    name
  }
})
