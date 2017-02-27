import { h, app } from 'hyperapp'
import hyperx from 'hyperx'

const html = hyperx(h)

app({
  model: 'Hey.',
  view: model => html`<h1>${model}</h1>`
})
