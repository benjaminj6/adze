import { html } from '../utils'

import search from './search'
import { done } from './icons'

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

const menuList = props => html`
  <div class="menu-list">
    <h4>${iconSpan(props.heading)}</h4>
    <ul>
    ${
      props.items.map(item => menuItem(item))
    }
    </ul>
  </div>
`

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

const menu = {
  items: testItems,
  heading: {
    icon: done(),
    text: 'Recent Posts'
  }
}

export default (props = menu) => html`
  <nav id="sidebar">
    ${search()}
    ${menuList(menu)}
  </nav>
`
