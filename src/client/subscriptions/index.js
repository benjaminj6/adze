export const loadData = (_, actions) => {
  console.log('loaded')
}

export const getInitialNewContent = (model, actions) => {
  if (/create|tags/.test(model.router.match)) {
    actions.clearNewContent()
  }

  if (/posts/.test(model.router.match)) {
    actions.selectPost(model.router.params.id)
  }
}

export default [getInitialNewContent]
