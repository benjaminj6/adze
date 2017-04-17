import { h } from 'hyperapp' // eslint-disable-line

export default ({ buttons }) => (
  <ul className='header-buttons'>
    {buttons.map(b => <li>{b}</li>)}
  </ul>
)
