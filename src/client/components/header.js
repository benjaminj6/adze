import { h } from 'hyperapp' // eslint-disable-line

import Button from './Button'
import { Menu, MoreVert, Tag, Save } from './icons'

const buttons = [
  {
    content: <Save />
  },
  {
    content: <Tag />
  },
  {
    content: <MoreVert />
  }
]

export default (props = { buttons }) =>
  <header>
    <Button>
      <Menu />
    </Button>
    <div class='settings'>
      {
        props.buttons.map(({ style, content }) =>
          <Button style={style}>
            {content}
          </Button>
        )
      }
    </div>
  </header>
