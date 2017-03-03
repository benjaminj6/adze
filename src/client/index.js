/* eslint-disable */
import { h, app, router } from 'hyperapp' // eslint-disable-line

import { DashboardView, Test, LoginView } from './view'
import './index.scss'

// temporary
import { Ex, Info, Edit, Menu } from './view/components/Icons'
// Will be removed
const testItems = [
  {
    href: 'foo.com',
    text: 'blaksjljasdf'
  },
  {
    href: 'bar.com',
    text: 'ajsdlfkjalksdjfa'
  },
  {
    href: 'baz.com',
    text: 'ajsdljfla d'
  }
]

const menu = [
  {
    heading: {
      text: 'Posts',
      icon: Ex()
    },
    items: testItems
  }
]

const promptButtons = [
  { content: 'New +', title: 'New', className: 'btn-accent btn-text'}
]
// end temporary

app({
  router,
  model: {
    menu,
    posts: testItems
  },
  view: {
    '/': model => <LoginView {...model} />,
    '/dashboard': model => <DashboardView noneSelected={true} {...model} />,
    '/dashboard/create': model => <DashboardView {...model} />,
    '/dashboard/posts/:id': model => <DashboardView {...model} />,
    '/test': model => <Test {...model} />
  },
  root: document.getElementById('root')
})
