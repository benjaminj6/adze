import createError from './errorGenerator' // eslint-disable-line

export default (ctx, next) => {
  if (ctx.passport.user) {
    return next()
  }

  throw createError(401, 'Unauthorized')
}
