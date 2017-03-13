import { h } from 'hyperapp' // eslint-disable-line

import { Plus, Close } from '../Icons'
import SidebarMenuHeading from './SidebarMenuHeading'
import SidebarMenuListItem from './SidebarMenuListItem'

import Toggler from '../Toggler'

export default ({ actions, item, model }, children) => {
  const isActive = new RegExp(`${item.href}`).test(model.router.match)

  return (
    <div className='menu-list'>
      <Toggler
        checked={isActive}
        id={`menu-${item.href}-toggler`}
        name='menu-item-toggler'>

        <SidebarMenuHeading
          isActive={isActive}>

          <i className='icon-toggle open'>
            <Plus height='1rem' />
          </i>
          <i className='icon-toggle closed'>
            <Close height='1rem' />
          </i>

          {item.title}
        </SidebarMenuHeading>

        <ul onclick={ev => {
         // TODO: Move into a function / action
          ev.preventDefault()
          const url = ev.target.pathname
          const id = url.split('id=')[1]

          if (/posts/.test(url)) {
            actions.selectPost(id)
          }

          actions.router.go(url)
        }}>

          {
            children.map(child =>
              <SidebarMenuListItem
                title={child.title || child.name}
                isActive={model.router.params.id === child._id}
                href={`/dashboard/${item.href}/id=${child._id}`} />
            )
          }
        </ul>

      </Toggler>
    </div>
  )
}
