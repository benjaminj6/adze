import { html } from '../utils'

import search from './search'

export default (props = {}) => html`
  <nav>
    ${search()}
  </nav>
`
