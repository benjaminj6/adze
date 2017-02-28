import { html } from '../utils'

import Search from './Search'

const iconSpan = props => html`
  <span>${props.icon}${props.text}</span>
`

const menuItem = ({ href, className, icon, text }) => html`
  <li>
    <a
      href="${href}"
      class="${className || ''}">
      ${text}
    </a>
  </li>
`

const menuHeading = props => html`
  <h4>${iconSpan(props)}</h4>
`

const menuList = props => html`
  <div class="menu-list">
    ${menuHeading(props.heading)}
    <ul>
    ${
      props.items.map(item => menuItem(item))
    }
    </ul>
  </div>
`

export default (props = {}) => html`
  <nav id="sidebar">
    ${Search()}
    ${props.map(h => menuList(h))}
  </nav>
`
