import Router from 'koa-router'
import postsRouter from './posts/router'

const api = new Router()

api.use('/api/posts', postsRouter.routes())

export default api
