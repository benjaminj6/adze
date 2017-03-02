import { h } from 'hyperapp' // eslint-disable-line

import Button from './Button'
import { Menu } from './Icons' // eslint-disable-line

const Settings = ({ buttons }) =>
  <div className='settings'>
    {
      buttons.map(btn =>
        <Button
          className={btn.className}
          title={btn.title}
          style={btn.style}>
          {btn.content}
        </Button>)
    }
  </div>

// TODO: Will need to abstract out current buttons into a prop

export default ({ current }) =>
  <header>
    <Button title='Menu'>
      <Menu />
    </Button>
    {
      current ? <Settings buttons={current.buttons} /> : ''
    }
  </header>
