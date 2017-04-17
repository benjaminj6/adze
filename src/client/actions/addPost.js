export default ({ posts }, post) => ({
  posts: [post].concat(posts),
  newContent: post,
  newContentSaved: true
})
