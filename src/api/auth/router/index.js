import passport from 'koa-passport'
import Router from 'koa-router'

const auth = new Router()

auth
  .post('/login', passport.authenticate('local', {
    successRedirect: '/api/posts/',
    failureRedirect: '/' // Will give anything right now...no file served from here
  }))
  .get('/logout', (ctx, next) => {
    ctx.logout()
    ctx.redirect('/')
  })

export default auth
