import { h } from 'hyperapp' // eslint-disable-line

import SidebarMenuList from './SidebarMenuList'
import SidebarMenuHeading from './SidebarMenuHeading'

export default ({ model, actions }) => (
  <section>
    {
      model.nav.map(item =>
        item.children
        ? <SidebarMenuList model={model} item={item} actions={actions}>
          {model[item.children]}
        </SidebarMenuList>
        : <SidebarMenuHeading
          isActive={
            new RegExp(`${item.href}$`).test(model.router.match)
          }
          // TODO: Move into a .scss file
          style={{ paddingLeft: '1.5rem' }}
          onclick={ev => {
            ev.preventDefault()
            actions.clearNewContent()
            actions.router.go(`/dashboard/${item.href}`)
          }}>

          <a href='/dashboard/create'>
            New Post
          </a>

        </SidebarMenuHeading>
      )
    }
  </section>
)
