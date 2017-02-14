import Koa from 'koa'
import bunyan from 'bunyan'
import koaLogger from 'koa-bunyan'

// Setup app instance
const app = new Koa()

// Setup logger instance
const logger = bunyan.createLogger({ name: 'blog-api' })

app.use(koaLogger(logger, { timeLimit: 100 }))

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server started and listening for connections on port ${PORT}`)
})
