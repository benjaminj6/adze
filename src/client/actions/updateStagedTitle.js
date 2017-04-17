export default ({ newContent }, title) => ({
  newContentSaved: false,
  newContent: {
    ...newContent,
    title
  }
})
