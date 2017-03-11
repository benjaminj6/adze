import createError from './errorGenerator' // eslint-disable-line

export default (ctx, next) => {
  // console.log('req', ctx.request)
  // console.log('pp', ctx.passport)
  // console.log('authenticated?', ctx.state)
  // console.log('ctx', ctx)
  // if (ctx.passport.user) {
  //   return next()
  // } else {
  //   console.log('why?')
  //   throw createError(401, 'Unauthorized')
  // }

  console.log(ctx.passport)
  return next()
}
