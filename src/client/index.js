
import './index.scss'

import { h, app } from 'hyperapp' // eslint-disable-line
/** @jsx h */

import header from './components/header'
import sidebar from './components/sidebar'
import editor from './components/editor'

// temporary
import { Done } from './components/icons'

// Will be removed
const testItems = [
  {
    href: 'foo.com',
    text: 'blaksjljasdf',
    icon: Done()
  },
  {
    href: 'bar.com',
    text: 'ajsdlfkjalksdjfa',
    icon: Done()
  },
  {
    href: 'baz.com',
    text: 'ajsdljfla d',
    icon: Done()
  }
]

const menu = [
  {
    heading: {
      text: 'Posts',
      icon: Done()
    },
    items: testItems
  }
]

app({
  model: 'Hey.',
  view: model =>
    <div id="app">
      {sidebar(menu)}
      <main>
        {header()}
        {editor()}
      </main>
    </div>
})
