import { h, app } from 'hyperapp'
import hyperx from 'hyperx'

import header from './components/header'

const html = hyperx(h)

app({
  model: 'Hey.',
  view: model => html`
    <div class="app">
      ${header()}
      <h1>${model}</h1>
    </div>
  `
})
