export default ({ newTagData }, color) => ({
  newTagDataSaved: false,
  newTagData: {
    ...newTagData,
    color
  }
})
