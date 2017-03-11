import Koa from 'koa'
import mongoose from 'mongoose'
mongoose.Promise = global.Promise

import api from './api'
import { log, middleware } from './config'

// Setup app instance
const app = new Koa()

function setupApp (devMiddleware) {
  if (devMiddleware) app.use(devMiddleware)

  middleware(app)
  app.use(api.routes())

  // render views
  api.get('/*', async (ctx, next) => {
    await ctx.render('index.html')
  })
}

// Database
export async function start (dev) {
  try {
    setupApp(dev)
    log.info('Starting server')
    await mongoose.connect(process.env.DB_URL)
    log.info(`Connected to the database ${process.env.DB_URL}`)

    const PORT = process.env.PORT || 8080
    return app.listen(PORT, () => {
      log.info(`Server started and listening for connections on port ${PORT}`)
    })
  } catch (err) {
    log.info(err)
    log.fatal(`Server failed to start -- Reason: ${err.message}`)
  }
}

export default app
