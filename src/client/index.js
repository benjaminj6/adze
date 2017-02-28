// /* eslint-disable */
import { h, app } from 'hyperapp' // eslint-disable-line

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Editor from './components/Editor'

import './index.scss'

// temporary
import { Ex, Info, Save } from './components/Icons'
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

const buttons = [
  {
    content: <Save />
  },
  {
    content: <Info />
  }
]
// end temporary

app({
  model: {
    menu,
    header: {
      buttons
    }
  },
  view: model =>
    <div id='app'>
      <Sidebar menu={model.menu} />
      <main>
        <Header {...model.header} />
        <Editor />
      </main>
    </div>
})
