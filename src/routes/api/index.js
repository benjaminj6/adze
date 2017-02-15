import Router from 'koa-router'
import postsRouter from './posts'

const api = new Router()

api.use('/posts', postsRouter.routes())

export default api
