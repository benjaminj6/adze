import { h } from 'hyperapp' // eslint-disable-line

export default (props, children) => (
  <div className='toggler'>
    <input
      hidden
      id={props.id}
      checked={props.checked || false}
      name={props.name}
      type='checkbox' />
    <label htmlFor={props.id}>
      {children[0]}
    </label>
    {children[1]}
  </div>
)
