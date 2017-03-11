import body from 'koa-bodyparser'
import koaLogger from 'koa-bunyan-logger'
import passport from 'koa-passport'
import session from 'koa-session-minimal'

import serve from 'koa-static'
import views from 'koa-views'
import path from 'path'
import mount from 'koa-mount'

import auth from './auth'
import log, { requestLogger } from './logger'

export default app => {
  app.use(koaLogger(log))
  app.use(requestLogger)

  // Rendering engine
  const pathToDist = '../../../dist'
  app.use(views(path.join(__dirname, pathToDist)))
  // Serve static assets
  // app.use(mount(
  //   '/statics',
  //   serve(path.join(__dirname, `${pathToDist}/statics`))
  // ))

  app.use(body({ enableTypes: ['json', 'form', 'text'] }))

  app.keys = [ 'secret' ]
  app.use(session())

  auth(passport)
  app.use(passport.initialize())
  app.use(passport.session())
}
