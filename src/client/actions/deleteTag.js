export default (_, tagId, actions) => {
  window.fetch(`/api/tags/${tagId}`, {
    method: 'DELETE',
    credentials: 'include'
  })
  .then(res => {
    if (res.status !== 200) {
      throw new Error('Failed to delete')
    }

    return res.json()
  })
  .then(json => {
    actions.removeTagFromModel(json._id)
    actions.router.go('/dashboard')
  })
  .catch(err => console.log(err))
}
