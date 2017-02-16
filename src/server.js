import bunyan from 'bunyan'
import Koa from 'koa'
import koaLogger from 'koa-bunyan'
import mongoose from 'mongoose'
import api from './api'

// Setup app instance
const app = new Koa()

// Setup logger instance
const log = bunyan.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  name: process.env.NAME || 'blog-api'
})

// Middleware
app.use(koaLogger(log, { timeLimit: 100 }))
app.use(api)

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
