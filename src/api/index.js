import Router from 'koa-router'
import postsRouter from './posts/router'
import authRouter from './auth/router'

const api = new Router()

api.use('/api/posts', postsRouter.routes())
api.use('/api/auth', authRouter.routes())

export default api
