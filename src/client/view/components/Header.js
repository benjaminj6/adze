import { h } from 'hyperapp' // eslint-disable-line

import Button from './Button'
import { Menu } from './Icons' // eslint-disable-line

const SettingsBtn = props =>
  <li className='settings-item'>
    <Button
      className={props.className}
      title={props.title}
      style={props.style}>
      {props.content}
    </Button>
    {props.menu && props.menu.open ? props.menu : ''}
  </li>

const Settings = ({ buttons }) =>
  <ul className='settings'>
    {
      buttons.map(btn =>
        <SettingsBtn {...btn} />
      )
    }
  </ul>

// TODO: Will need to abstract out current buttons into a prop

export default ({ left, right, style }) =>
  <header style={style || ''}>
    <Button title='Menu'>
      {left}
    </Button>
    {
      right ? <Settings buttons={right} /> : ''
    }
  </header>
