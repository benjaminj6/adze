/* eslint-disable */
import { h, app, router } from 'hyperapp' // eslint-disable-line

import { DashboardView, LoginView } from './view'
import './index.scss'

// temporary
import { Ex, Info, Edit, Menu } from './view/components/Icons'
// Will be removed
const model = {
  posts: [
    {
      title: 'foo',
      md: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, quia! Reprehenderit, qui non. Excepturi dignissimos facere incidunt sequi laudantium, tenetur tempora obcaecati culpa enim totam, illo odio vitae at voluptate!',
      date: 'xx-xx-xxxx',
      id: 1
    },
    {
      title: 'bar',
      md: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, quia! Reprehenderit, qui non. Excepturi dignissimos facere incidunt sequi laudantium, tenetur tempora obcaecati culpa enim totam, illo odio vitae at voluptate!',
      date: 'xx-xx-xxxx',
      id: 2
    }
  ],
  tags: [
    { name: 'foo', color: 'green' },
    { name: 'bar', color: 'blue' }
  ],
  selected: null
}
// end temporary

app({
  router,
  model,
  view: {
    '/': model => <LoginView {...model} />,
    '/dashboard': model => <DashboardView {...model} />,
    '/dashboard/create': model => <DashboardView {...model} />,
    '/dashboard/posts/:id': model => <DashboardView {...model} />
  },
  root: document.getElementById('root')
})
