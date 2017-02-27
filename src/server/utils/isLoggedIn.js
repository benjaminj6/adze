import createError from './errorGenerator'

export default ({ passport }, next) => {
  if (passport.user) {
    return next()
  } else {
    throw createError(401, 'Unauthorized')
  }
}

