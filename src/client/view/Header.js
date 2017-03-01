import { h } from 'hyperapp' // eslint-disable-line

import Button from './Button'
import { Menu, Info, Save } from './Icons' // eslint-disable-line

const Settings = ({ buttons }) =>
  <div className='settings'>
    {buttons &&
      buttons.map(btn => <Button style={btn.style}>{btn.content}</Button>)
    }
  </div>

export default ({ buttons }) =>
  <header>
    <Button>
      <Menu />
    </Button>
    <Settings
      buttons={[
        { content: <Save /> },
        { content: <Info /> }
      ]} />
  </header>
