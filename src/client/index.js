/* eslint-disable */
import { h, app, router } from 'hyperapp' // eslint-disable-line

import { Dashboard, Test, Login } from './view'
import './index.scss'

// temporary
import { Ex, Info, Edit, Menu } from './view/Icons'
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

const buttons = [
  { content: <Edit />, title: 'Edit' },
  { content: <Info />, title: 'Info' },
  {
    content: 'Publish',
    title: 'More',
    className: 'btn-text'
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
    current: {
      left: <Menu />,
      right: promptButtons
    }
  },
  view: {
    '/': model => <Login {...model} />,
    '/dashboard': model => <Dashboard {...model} />,
    '/test': model => <Test {...model} />
  },
  root: document.getElementById('root')
})
