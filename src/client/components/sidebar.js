import { h } from 'hyperapp' // eslint-disable-line
import Search from './Search'

const MenuListItem = ({ className, href, text }) =>
  <li>
    <a
      className={className || ''}
      href={href}>
      {text}
    </a>
  </li>

const MenuList = ({ heading, items }) =>
  <div className='menu-list'>
    <h4>{heading.icon}{heading.text}</h4>
    <ul>
      {items.map(item => <MenuListItem {...item} />)}
    </ul>
  </div>

export default props =>
  <nav id='sidebar'>
    <Search />
    { console.log(props.menu[0]) }
    {
      props.menu.map(item => <MenuList {...item} />)
    }
  </nav>
