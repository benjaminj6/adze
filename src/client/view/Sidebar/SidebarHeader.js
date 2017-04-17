import { h } from 'hyperapp' // eslint-disable-line

import { AngleDown, Logout } from '../general/Icons'

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
        <button onclick={_ => actions.logout()}>
          <Logout size='1rem' />
          <span>Logout</span>
        </button>
      </div>
    </div>
  </header>
