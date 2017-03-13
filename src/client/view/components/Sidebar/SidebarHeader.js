import { h } from 'hyperapp' // eslint-disable-line

import { AngleDown, Logout } from '../Icons'

export default ({ model, actions }) =>
  <header>
    <div className='sidebar-user'>
      <input
        hidden
        id='user-menu-toggler'
        type='checkbox' />
      <label htmlFor='user-menu-toggler'>
        <AngleDown />
        <span>{model.email}</span>
      </label>
      <div id='user-dropdown'>
        <button><Logout size='1rem' />Logout</button>
      </div>
    </div>
  </header>
