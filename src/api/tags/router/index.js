import Router from 'koa-router'

import * as controller from '../controller'
import { isLoggedIn } from '~/utils'

const tags = new Router()

tags
  .get('/', controller.getTags)
  .post('/', isLoggedIn, controller.addTag)
  .patch('/:id', isLoggedIn, controller.editTag)
  .del('/:id', isLoggedIn, controller.deleteTag)

export default tags
