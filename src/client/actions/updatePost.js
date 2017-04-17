export default ({ posts }, post) => ({
  newContentSaved: true,
  posts: posts.map(p => p._id === post._id ? post : p),
  newContent: post
})
