export default (model, newTagData, actions) => {
  // TODO: swap `window.fetch` for a polyfill
  window.fetch(`/api/tags/${newTagData._id}`, {
    method: 'PATCH',
    credentials: 'include',
    body: JSON.stringify({
      name: newTagData.name,
      color: newTagData.color
    }),
    headers: new window.Headers({ 'Content-Type': 'application/json' })
  }).then(res => {
    if (res.status !== 200) {
      throw new Error('Post failed to update')
    }

    return res.json()
  })
  .then(json => actions.updateSavedTag(json))
  .catch(err => console.log('ERR!', err))
}
