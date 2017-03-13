import { h } from 'hyperapp' // eslint-disable-line

import { Menu } from '../Icons'
import SidebarHeader from './SidebarHeader'
import SidebarBody from './SidebarBody'

export default ({ model, actions }) => (
  <nav id='nav'>
    <label
      id='nav-toggler-btn'
      for='nav-toggler'
      onclick={ev => { console.log(model) }}>
      <Menu />
    </label>
    <div id='sidebar'>
      <SidebarHeader model={model} />
      <SidebarBody model={model} actions={actions} />
    </div>
  </nav>
)
