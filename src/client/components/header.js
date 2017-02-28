import { h } from 'hyperapp' // eslint-disable-line

import { html } from '../utils'
import { Menu, MoreVert, Tag } from './icons'
import button from './button'

const buttons = [<MoreVert />, Tag(), MoreVert()]

export default () => html`
  <header>
    ${button({
      content: Menu()
    })}
    <div class="settings">
      ${
        buttons.map(btn => button({ content: btn }))
      }
    </div>
  </header>
`
