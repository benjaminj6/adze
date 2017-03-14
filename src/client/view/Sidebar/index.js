import { h } from 'hyperapp' // eslint-disable-line

import SidebarHeader from './SidebarHeader'
import SidebarBody from './SidebarBody'

export default ({ model, actions }) => (
  <nav id='nav'>
    <SidebarHeader model={model} actions={actions} />
    <SidebarBody model={model} actions={actions} />
  </nav>
)
