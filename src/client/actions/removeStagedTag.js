export default ({ newContent }, tagId) => {
  if (newContent.tags) {
    return {
      newContentSaved: false,
      newContent: {
        ...newContent,
        tags: newContent.tags.slice().filter(t => t._id !== tagId)
      }
    }
  }
}
