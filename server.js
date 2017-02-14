import Koa from 'koa'
import bunyan from 'bunyan'
import koaLogger from 'koa-bunyan'

// Setup app instance
const app = new Koa()

// Setup logger instance
const log = bunyan.createLogger({ name: 'blog-api' })

// Middleware
app.use(koaLogger(log, { timeLimit: 100 }))

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  log.info(`Server started and listening for connections on port ${PORT}`)
})
