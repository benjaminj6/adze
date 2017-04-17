export default ({ posts }, newPost, actions) => {
  // TODO: swap `fetch` for a polyfill
  window.fetch('/api/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: newPost.title,
      post: newPost.md,
      tags: newPost.tags
    }),
    headers: new window.Headers({
      'Content-Type': 'application/json'
    }),
    credentials: 'include'
  })
  .then(res => {
    if (res.status !== 201) {
      throw new Error('Unauthorized')
    }

    return res.json()
  })
  .then(json => {
    actions.addPost(json)
    actions.router.go(`/dashboard/posts/id=${json._id}`)
  })
  .catch(err => console.log(err))
}
