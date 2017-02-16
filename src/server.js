import Koa from 'koa'
import koaLogger from 'koa-bunyan-logger'
import mongoose from 'mongoose'
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

// Error logging
app.on('error', err => {
  log.warn(`[ERR] ${err.name}: ${err.message}`)
})

// Database
mongoose.Promise = global.Promise

async function start () {
  try {
    log.info('Starting server')
    await mongoose.connect(process.env.DB_URL)
    log.info(`Connected to the database ${process.env.DB_URL}`)

    const PORT = process.env.PORT || 8080
    app.listen(PORT, () => {
      log.info(`Server started and listening for connections on port ${PORT}`)
    })
  } catch (err) {
    log.info(err)
    log.fatal(`Server failed to start -- Reason: ${err.message}`)
  }
}

start()
