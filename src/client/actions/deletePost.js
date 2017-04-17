export default ({ posts }, postId, actions) => {
  // TODO: swap `fetch` for a polyfill
  window.fetch(`/api/posts/${postId}`, {
    method: 'DELETE',
    credentials: 'include'
  })
  .then(res => {
    if (res.status !== 200) {
      throw new Error('Post failed to delete')
    }

    actions.deletePostFromModel(postId)
    actions.router.go('/dashboard')
  })
  .catch(err => console.log(err))
}
