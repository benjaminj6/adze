export default ({ posts }, updatedPost, actions) => {
  // TODO: swap `fetch` for a polyfill
  window.fetch(`/api/posts/${updatedPost._id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      title: updatedPost.title,
      post: updatedPost.md,
      tags: updatedPost.tags
    }),
    headers: new window.Headers({ 'Content-Type': 'application/json' }),
    credentials: 'include'
  })
  .then(res => {
    if (res.status === 401) {
      actions.router.go('/')
    }

    if (res.status !== 200) {
      throw new Error('Post failed to save')
    }

    return res.json()
  })
  .then(json => {
    actions.updatePost(json)
  })
  .catch(err => {
    console.log(err)
  })
}
