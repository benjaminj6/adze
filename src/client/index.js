import { h, app, Router } from 'hyperapp' // eslint-disable-line

import model from './model'
import * as actions from './actions'
import subscriptions from './subscriptions'
import * as views from './view'

// Styles
import './index.scss'

app({
  model,
  actions,
  subscriptions,
  view: {
    '*': views.NotFound,
    '/': views.Login,
    '/dashboard/*': views.Dashboard,
    '/dashboard/tags/id=:id': views.Dashboard,
    '/dashboard/create': views.Dashboard,
    '/dashboard/posts/id=:id': views.Dashboard
  },
  plugins: [Router],
  hooks: {
    onAction: action => console.log(action)
  },
  root: document.getElementById('root')
})
