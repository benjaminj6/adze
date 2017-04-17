export default ({ newContent, posts }, postId) => {
  const post = posts.find(p => p._id === postId)
  if (post) {
    return {
      newContentSaved: true,
      newContent: post
    }
  }
}
