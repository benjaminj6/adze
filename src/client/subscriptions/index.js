/* eslint-disable */
export const getPosts = (model, actions) => {
  return window.fetch('/api/posts')
    .then(res => {
      console.log(res)
      return res.json()
    })
    .then(json => {
      console.log('now here', json)
      actions.addAllPosts(json)
    })
    .catch(err => console.error('this handler', err))
}

export const getTags = (model, actions) => {
  return window.fetch('/api/tags')
    .then(res => res.json())
    .then(json => {
      actions.addAllTags(json)
    })
    .catch(err => console.error(err))
}

const getInitialNewContent = (model, actions) => {
  console.log('model', model)
  if (/create|tags/.test(model.router.match)) {
    actions.clearNewContent()
  }

  if (/tags/.test(model.router.match)) {
    console.log('made it here too', model.router.params.id)
    actions.selectTag(model.router.params.id)
  }

  if (/posts/.test(model.router.match)) {
    actions.selectPost(model.router.params.id)
  }
}

export const loadRemoteData = (model, actions) => {
  getPosts(model, actions)
    .then(_ => getTags(model, actions))
    .then(_ => getInitialNewContent(model, actions))
}

export default [loadRemoteData]
