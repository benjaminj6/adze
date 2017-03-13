import { h } from 'hyperapp' // eslint-disable-line

export default (props, children) => (
  <h3
    {...props}
    className={props.isActive ? 'active' : ''}>
    {children}
  </h3>
)
