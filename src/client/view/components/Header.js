import { h } from 'hyperapp' // eslint-disable-line

import Button from './Button'
import { Menu } from './Icons' // eslint-disable-line

const Settings = ({ buttons }) =>
  <ul className='settings'>
    {
      buttons.map(btn =>
        <li className='settings-item'>
          <Button
            className={btn.className}
            title={btn.title}
            style={btn.style}>
            {btn.content}
          </Button>
          {btn.menu ? btn.menu : ''}
        </li>
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
