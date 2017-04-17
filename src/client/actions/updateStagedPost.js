export default ({ newContent }, post) => ({
  newContentSaved: false,
  newContent: {
    ...newContent,
    md: post
  }
})
