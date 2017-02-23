import Router from 'koa-router'

import * as controller from '../controller'
import { isLoggedIn } from '~/utils'

const tags = new Router()

tags
  .get('/', controller.getTags)
  .post('/add', isLoggedIn, controller.addTag)
  .put('/edit/:id', controller.editTag)

export default tags
