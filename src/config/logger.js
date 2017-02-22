import bunyan from 'bunyan'

// Setup logger instance
let log = bunyan.createLogger({
  level: process.env.LOG_LEVEL || 'info',
  name: process.env.NAME || 'blog-api'
})

export async function requestLogger ({ request, response }, next) {
  const started = new Date()
  log.info(`[REQ] ${request.method} ${request.url}`)
  await next()
  const ms = new Date() - started
  log.info(`[RES] ${request.method} ${request.url} (${response.status}) took ${ms}ms`)
}

export default log

