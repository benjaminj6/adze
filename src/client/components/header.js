import { h } from 'hyperapp' // eslint-disable-line

import Button from './Button'
import { Menu, MoreVert, Save } from './Icons' // eslint-disable-line

export default ({ buttons }) =>
  <header>
    <Button>
      <Menu />
    </Button>
    <div class='settings'>
      {buttons &&
        buttons.map(({ style, content }) =>
          <Button style={style}>
            {content}
          </Button>
        )
      }
    </div>
  </header>
