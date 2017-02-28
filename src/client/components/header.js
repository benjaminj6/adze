import { html } from '../utils'
import { menu, moreVert } from './icons'
import button from './button'

export default () => html`
  <header>
    ${button({
      content: menu()
    })}
    ${button({
      content: moreVert()
    })}
  </header>
`
