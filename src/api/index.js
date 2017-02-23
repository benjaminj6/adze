import Router from 'koa-router'
import postsRouter from './posts/router'
import authRouter from './auth/router'
import tagsRouter from './tags/router'

const api = new Router()

api.use('/api/posts', postsRouter.routes())
api.use('/api/auth', authRouter.routes())
api.use('/api/tags', tagsRouter.routes())

export default api
