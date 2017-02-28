import './index.scss'

import { h, app } from 'hyperapp'
import hyperx from 'hyperx'

import header from './components/header'
import sidebar from './components/sidebar'
import editor from './components/editor'

const html = hyperx(h)

app({
  model: 'Hey.',
  view: model => html`
    <div id="app">
      ${sidebar()}
      <main>
        ${header()}
        ${editor()}
      </main>
    </div>
  `
})
