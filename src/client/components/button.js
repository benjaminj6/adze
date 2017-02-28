import { html } from '../utils'

export default (props = {}) => html`
  <button
    style=${props.style}
    class='${props.class || 'btn-default'}'>
    ${props.content}
  </button>
`
