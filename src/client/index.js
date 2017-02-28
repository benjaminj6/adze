import './index.scss'

import { h, app } from 'hyperapp'
import hyperx from 'hyperx'

import header from './components/header'
import sidebar from './components/sidebar'
import editor from './components/editor'

// temporary
import { done } from './components/icons'

const html = hyperx(h)

// Will be removed
const testItems = [
  {
    href: 'foo.com',
    text: 'blaksjljasdf',
    icon: done()
  },
  {
    href: 'bar.com',
    text: 'ajsdlfkjalksdjfa',
    icon: done()
  },
  {
    href: 'baz.com',
    text: 'ajsdljfla d',
    icon: done()
  }
]

const menu = [
  {
    heading: {
      text: 'Recent Posts',
      icon: done()
    },
    items: testItems
  },
  {
    heading: {
      text: 'Categories',
      icon: done()
    },
    items: testItems
  }
]

app({
  model: 'Hey.',
  view: model => html`
    <div id="app">
      ${sidebar(menu)}
      <main>
        ${header()}
        ${editor()}
      </main>
    </div>
  `
})
