import { h } from 'hyperapp' // eslint-disable-line
import { User as UserIcon } from './Icons'

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

const User = props =>
  <span className='user'>
    <UserIcon />
    {props.user}
  </span>

export default props =>
  <aside id='sidebar'>
    <header>
      <User user='test@test.com' />
    </header>
    <nav>
      {
        props.menu.map(item => <MenuList {...item} />)
      }
    </nav>
  </aside>
