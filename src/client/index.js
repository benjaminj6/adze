// /* eslint-disable */
import { h, app, router } from 'hyperapp' // eslint-disable-line

import { Dashboard, Test } from './view'
import './index.scss'

// temporary
import { Ex, Info, Edit } from './view/Icons'
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
// end temporary

app({
  router,
  model: {
    menu,
    buttons
  },
  view: {
    '/dashboard': model => <Dashboard {...model} />,
    '/test': model => <Test {...model} />
  },
  root: document.getElementById('root')
})
