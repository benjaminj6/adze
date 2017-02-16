export function getPosts (ctx, next) {
  ctx.body = 'This will serve ALL of the posts in the db'
}

export function getLimitedPosts (ctx, next) {
  ctx.body = `This will serve ${ctx.params.number} most recent posts in the db`
}

export function deletePost (ctx, next) {
  ctx.body = `This will delete a post with the id ${ctx.params.id}`
}

export function addPost (ctx, next) {
  ctx.body = 'This will add a post in the user\'s posts'
}

export function editPost (ctx, next) {
  ctx.body = `This will update a post with id ${ctx.params.id}`
}
