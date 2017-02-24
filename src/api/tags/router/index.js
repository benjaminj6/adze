import Router from 'koa-router'

import * as controller from '../controller'
import { isLoggedIn } from '~/utils'

const tags = new Router()

tags
  .get('/', controller.getTags)
  .post('/add', isLoggedIn, controller.addTag)
  .patch('/:id', controller.editTag)
  .del('/:id', controller.deleteTag)

export default tags
