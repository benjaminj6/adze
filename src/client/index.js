// /* eslint-disable */
import { h, app } from 'hyperapp' // eslint-disable-line

import view from './view'
import './index.scss'

// temporary
import { Ex } from './view/Icons'
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
// end temporary

app({
  model: {
    menu
  },
  view
})
