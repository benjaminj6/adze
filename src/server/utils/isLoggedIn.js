import createError from './errorGenerator' // eslint-disable-line

export default (ctx, next) => {
  // work around authentication for dev until figure how to proxy the session
  if (process.env.NODE_ENV === 'development') {
    return next()
  }

  if (ctx.passport.user) {
    return next()
  } else {
    throw createError(401, 'Unauthorized')
  }
}
