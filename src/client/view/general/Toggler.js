import { h } from 'hyperapp' // eslint-disable-line


// This component takes two children. The first child contains the components that go inside the
// toggler itself, while the second child contains the body to be toggled by the toggler
export default (props, children) => (
  <div className={`toggler ${props.className || ''}`}>
    <input
      checked={props.checked || ''}
      hidden
      id={props.id}
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
