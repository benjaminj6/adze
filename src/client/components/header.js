import { html } from '../utils'
import { menu, moreVert } from './icons'
import button from './button'

const buttons = ['a', '2', '4']

export default () => html`
  <header>
    ${button({
      content: menu()
    })}
    <div class="settings">
      ${buttons.map(btn => button(
        {
          content: moreVert()
        }
      ))}
    </div>
  </header>
`
