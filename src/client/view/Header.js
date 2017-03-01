import { h } from 'hyperapp' // eslint-disable-line

import Button from './Button'
import { Menu, Info, Save } from './Icons' // eslint-disable-line

const Settings = ({ buttons }) =>
  <div className='settings'>
    {buttons &&
      buttons.map(btn =>
        <Button
          title={btn.title}
          style={btn.style}>
          {btn.content}
        </Button>)
    }
  </div>

export default ({ buttons }) =>
  <header>
    <Button title='Menu'>
      <Menu />
    </Button>
    <Settings
      buttons={[
        { content: <Save />, title: 'Save' },
        { content: <Info />, title: 'Info' }
      ]} />
  </header>
