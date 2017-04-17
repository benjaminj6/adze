import { h, app, Router } from 'hyperapp' // eslint-disable-line

import model from './model'
import * as actions from './actions'
import subscriptions from './subscriptions'
import routes from './view'

// Styles
import './index.scss'

app({
  model,
  actions,
  subscriptions,
  view: routes,
  plugins: [Router],
  hooks: {
    onAction: action => console.log(action)
  },
  root: document.getElementById('root')
})
