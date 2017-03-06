/* eslint-disable */
import { h, app, Router } from 'hyperapp' // eslint-disable-line

import actions from './actions'
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
      date: 'xx-xx-xxxx',
      id: 1,
      tags: [3, 4]
    },
    {
      title: 'bar',
      md: '# FOOOOOOOOOOOOO \n\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, quia! Reprehenderit, qui non. Excepturi dignissimos facere incidunt sequi laudantium, tenetur tempora obcaecati culpa enim totam, illo odio vitae at voluptate! \n\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, quia! Reprehenderit, qui non. Excepturi dignissimos facere incidunt sequi laudantium, tenetur tempora obcaecati culpa enim totam, illo odio vitae at voluptate! \n\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, quia! Reprehenderit, qui non. Excepturi dignissimos facere incidunt sequi laudantium, tenetur tempora obcaecati culpa enim totam, illo odio vitae at voluptate! \n\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, quia! Reprehenderit, qui non. Excepturi dignissimos facere incidunt sequi laudantium, tenetur tempora obcaecati culpa enim totam, illo odio vitae at voluptate!',
      date: 'xx-xx-xxxx',
      id: 2
    }
  ],
  tags: [
    {
      title: 'foo',
      color: 'green',
      id: 3
    },
    {
      title: 'bar',
      color: 'blue',
      id: 4
    },
    {
      title: 'baz',
      color: 'red',
      id: 5
    }
  ],
  selected: parseInt(window.location.pathname.split('id=')[1]) || null,
  current: {
    title: 'foo',
    md: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, quia! Reprehenderit, qui non. Excepturi dignissimos facere incidunt sequi laudantium, tenetur tempora obcaecati culpa enim totam, illo odio vitae at voluptate!',
    date: 'xx-xx-xxxx',
    id: 1,
    tags: [
      {
        title: 'foo',
        color: 'green',
        id: 3
      },
      {
        title: 'bar',
        color: 'blue',
        id: 4
      },
    ]
  },
  writing: /posts|create/.test(window.location.pathname)
}
// end temporary

app({
  model,
  actions,
  subscriptions,
  view: {
    '/': model => <LoginView {...model} />,
    '/dashboard': model => <DashboardView {...model} />,
    '/dashboard/tags/id=:id': model => <DashboardView {...model} />,
    '/dashboard/create': model => <DashboardView {...model} />,
    '/dashboard/posts/id=:id': model => <DashboardView {...model} />
  },
  plugins: [Router],
  root: document.getElementById('root')
})
