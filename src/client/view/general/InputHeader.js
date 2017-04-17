import { h } from 'hyperapp' // eslint-disable-line

export default (props = {}) => (
  <input
    className={`input-header ${props.className | ''}`}
    name={props.name || ''}
    placeholder={props.placeholder || ''}
    value={props.value || ''}
    oninput={props.oninput || ''}
    type='text' />
)
