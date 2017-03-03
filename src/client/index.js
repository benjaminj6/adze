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
    '/': model => <LoginView {...model} />,
    '/dashboard': model => <DashboardView {...model} />,
    '/dashboard/create': model =>
      <DashboardView
        editMode={true}
        {...model} />,
    '/test': model => <Test {...model} />
  },
  root: document.getElementById('root')
})
