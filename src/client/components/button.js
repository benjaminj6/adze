import { h } from 'hyperapp' // eslint-disable-line

export default (props, children) =>
  <button
    style={props.style || ''}
    className={props.className || 'btn-default'}>
    {children}
  </button>
