import { h } from 'hyperapp' // eslint-disable-line

export default (props, children) => (
  <div className={`toggler ${props.className || ''}`}>
    <input
      hidden
      id={props.id}
      checked={props.checked || ''}
      name={props.name || false}
      type='checkbox' />
    <label
      htmlFor={props.id}
      id={`${props.id}-btn`}>
      {children[0]}
    </label>
    {children[1]}
  </div>
)
