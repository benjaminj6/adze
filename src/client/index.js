/* eslint-disable */
import { h, app, Router } from 'hyperapp' // eslint-disable-line

import * as actions from './actions'
import subscriptions from './subscriptions'

import { DashboardView, LoginView } from './view'
import './index.scss'

// Will be removed
const model = {
  email: 'test@test.com',
  posts: [
    {
      title: 'foo',
      md: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, quia! Reprehenderit, qui non. Excepturi dignissimos facere incidunt sequi laudantium, tenetur tempora obcaecati culpa enim totam, illo odio vitae at voluptate!',
      date: new Date(),
      id: '1',
      tags: [
        {
          title: 'foo',
          color: 'green',
          id: '3'
        },
        {
          title: 'bar',
          color: 'blue',
          id: '4'
        }
      ]
    },
    {
      title: 'bar',
      md: '# FOOOOOOOOOOOOO \n\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, quia! Reprehenderit, qui non. Excepturi dignissimos facere incidunt sequi laudantium, tenetur tempora obcaecati culpa enim totam, illo odio vitae at voluptate! \n\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, quia! Reprehenderit, qui non. Excepturi dignissimos facere incidunt sequi laudantium, tenetur tempora obcaecati culpa enim totam, illo odio vitae at voluptate! \n\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, quia! Reprehenderit, qui non. Excepturi dignissimos facere incidunt sequi laudantium, tenetur tempora obcaecati culpa enim totam, illo odio vitae at voluptate! \n\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, quia! Reprehenderit, qui non. Excepturi dignissimos facere incidunt sequi laudantium, tenetur tempora obcaecati culpa enim totam, illo odio vitae at voluptate!',
      date: new Date(),
      id: '2',
      tags: []
    }
  ],
  tags: [
    {
      title: 'foo',
      color: 'green',
      id: '3'
    },
    {
      title: 'bar',
      color: 'blue',
      id: '4'
    },
    {
      title: 'baz',
      color: 'red',
      id: '5'
    }
  ],
  saved: false,
  newContent: {
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
