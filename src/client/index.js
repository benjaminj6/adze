// /* eslint-disable */
import { h, app } from 'hyperapp' // eslint-disable-line

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'

import './index.scss'

// temporary
import { Ex } from './components/Icons'
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
  view: model =>
    <div id='app'>
      <Sidebar menu={model.menu} />
      <main>
        <Header />
        <Editor />
      </main>
    </div>
})
