import { h } from 'hyperapp' // eslint-disable-line

export default (props, children) =>
  <button
    title={props.title || ''}
    style={props.style || ''}
    className={props.className || 'btn-default'}>
    {children}
  </button>
