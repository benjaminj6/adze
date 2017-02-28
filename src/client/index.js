
import './index.scss'

import { h, app } from 'hyperapp' // eslint-disable-line
/** @jsx h */

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'

// temporary
import { Ex } from './components/Icons'

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
      {Sidebar(menu)}
      <main>
        {Header()}
        {Editor()}
      </main>
    </div>
})
