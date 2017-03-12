export const loadData = (_, actions) => {
  console.log('loaded')
}

export const getPosts = (model, actions) => {
  window.fetch('/api/posts')
    .then(res => {
      console.log(res)
      return res.json()
    })
    .then(json => { actions.addAllPosts(json) })
    .catch(err => console.error(err))
}

export const getTags = (model, actions) => {
  window.fetch('/api/tags')
    .then(res => res.json())
    .then(json => { actions.addAllTags(json) })
    .catch(err => console.error(err))
}

export const getInitialNewContent = (model, actions) => {
  if (/create|tags/.test(model.router.match)) {
    actions.clearNewContent()
  }

  if (/posts/.test(model.router.match)) {
    actions.selectPost(model.router.params.id)
  }
}

export default [getInitialNewContent, getPosts, getTags]
