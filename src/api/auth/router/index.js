import passport from 'koa-passport'
import Router from 'koa-router'

const auth = new Router()

auth
  .post('/login', passport.authenticate('local', {
    successRedirect: '/api/posts/',
    failureRedirect: '/api/posts/1'
  }))

export default auth
