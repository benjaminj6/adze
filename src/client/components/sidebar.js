import { html } from '../utils'

import search from './search'
import { done } from './icons'

const menuItem = (props) => html`
  <li>
    <a
      href="${props.href}"
      class="${props.class || ''}">
      ${done()} ${props.content}
    </a>
  </li>
`

const test = {
  nav: ['some really long sentance...what will happen if I do this', 'bar', 'baz']
}

export default (props = test) => html`
  <nav id="sidebar">
    ${search()}
    <ul>
      ${
        props.nav.map(link => menuItem({
          href: link,
          content: link
        }))
      }
    </ul>
  </nav>
`
