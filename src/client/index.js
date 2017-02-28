
import './index.scss'

import { h, app } from 'hyperapp' // eslint-disable-line
/** @jsx h */

import header from './components/header'
import sidebar from './components/sidebar'
import editor from './components/editor'

// temporary
import { Ex } from './components/icons'

// Will be removed
const testItems = [
  {
    href: 'foo.com',
    text: 'blaksjljasdf',
    icon: Ex()
  },
  {
    href: 'bar.com',
    text: 'ajsdlfkjalksdjfa',
    icon: Ex()
  },
  {
    href: 'baz.com',
    text: 'ajsdljfla d',
    icon: Ex()
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

app({
  model: 'Hey.',
  view: model =>
    <div id='app'>
      {sidebar(menu)}
      <main>
        {header()}
        {editor()}
      </main>
    </div>
})
