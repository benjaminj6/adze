import { html } from '../utils'

const defaultIconProps = {
  fill: '#000',
  height: '24',
  width: '24',
  viewBox: '0 0 24 24',
  xmlns: 'http://www.w3.org/2000/svg'
}

// TODO: remove this icon if not used
export const done = (props = defaultIconProps) => html`
  <svg
    class="done"
    fill=${props.fill}
    height=${props.height}
    viewBox=${props.viewBox}
    width=${props.width}
    xmlns=${props.xmlns}>
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
  </svg>
`

export const menu = (props = defaultIconProps) => html`
  <svg
    class="menu"
    fill=${props.fill}
    height=${props.height}
    viewBox=${props.viewBox}
    width=${props.height}
    xmlns=${props.xmlns}>
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
  </svg>
`

export const moreVert = (props = defaultIconProps) => html`
  <svg
    class="more-vertical"
    fill=${props.fill}
    height=${props.height}
    viewBox=${props.viewBox}
    width=${props.height}
    xmlns=${props.xmlns}>
      <path d="M0 0h24v24H0z" fill="none"/>
      <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
`
