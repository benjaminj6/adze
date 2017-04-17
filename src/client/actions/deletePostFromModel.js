import defaultNewContent from './defaultNewContent'

export default ({ posts }, postId) => ({
  posts: posts.filter(p => p._id !== postId),
  newContent: defaultNewContent
})
