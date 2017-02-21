import Koa from 'koa'
import koaLogger from 'koa-bunyan-logger'
import mongoose from 'mongoose'
mongoose.Promise = global.Promise

import api from './api'
import log from './config/logger'

// Setup app instance
const app = new Koa()

// Middleware
app.use(koaLogger(log))
app.use(async ({ request, response }, next) => {
  const started = new Date()
  log.info(`[REQ] ${request.method} ${request.url}`)
  await next()
  const ms = new Date() - started
  log.info(`[RES] ${request.method} ${request.url} (${response.status}) took ${ms}ms`)
})

app.use(api.routes())

// Error handling
app.on('error', (err, ctx) => {
  err.message = `[ERR] ${err.message}`
  log.error(err)
  ctx.status = err.status || 500
  ctx.body = err
})

// Database

export async function start () {
  try {
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
