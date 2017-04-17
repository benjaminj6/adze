import NotFound from './404'
import Dashboard from './Dashboard'
import Login from './Login'

export default {
  '*': NotFound,
  '/': Login,
  '/dashboard/*': Dashboard,
  '/dashboard/tags/id=:id': Dashboard,
  '/dashboard/create': Dashboard,
  '/dashboard/posts/id=:id': Dashboard
}
