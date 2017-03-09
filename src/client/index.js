import { h, app, Router } from 'hyperapp' // eslint-disable-line

import * as actions from './actions'
import subscriptions from './subscriptions'

import { DashboardView, LoginView } from './view'
import './index.scss'

// Will be removed
const model = {
  email: 'test@test.com',
  nav: [
    {
      title: 'New Post',
      href: 'create'
    },
    {
      title: 'Recent Posts',
      href: 'posts',
      children: 'posts'
    },
    {
      title: 'Categories',
      href: 'tags',
      children: 'tags'
    }
  ],
  posts: [],
  tags: [
    {
      title: 'foo',
      color: 'green',
      _id: '3'
    },
    {
      title: 'bar',
      color: 'blue',
      _id: '4'
    },
    {
      title: 'baz',
      color: 'red',
      _id: '5'
    }
  ],
  saved: false,
  newContent: {
    title: '',
    md: '',
    tags: []
  }
}
// end temporary

app({
  model,
  actions,
  subscriptions,
  view: {
    '/': LoginView,
    '/dashboard': DashboardView,
    '/dashboard/tags/id=:id': DashboardView,
    '/dashboard/create': DashboardView,
    '/dashboard/posts/id=:id': DashboardView
  },
  plugins: [Router],
  root: document.getElementById('root')
})
