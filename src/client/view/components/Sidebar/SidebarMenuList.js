import { h } from 'hyperapp' // eslint-disable-line

import { Plus, Close } from '../Icons'
import SidebarMenuHeading from './SidebarMenuHeading'
import SidebarMenuListItem from './SidebarMenuListItem'

export default (props, children) => (
  <div className='menu-list'>
    <input
      hidden
      checked={
        new RegExp(`${props.item.href}`).test(props.model.router.match)
      }
      id={`menu-${props.item.href}-toggler`}
      type='checkbox'
      name='menu-item-toggler' />

    <label htmlFor={`menu-${props.item.href}-toggler`}>
      <SidebarMenuHeading
        isActive={
          new RegExp(`${props.item.href}`).test(props.model.router.match)
        }>

        <i className='icon-toggle open'>
          <Plus height='1rem' />
        </i>
        <i className='icon-toggle closed'>
          <Close height='1rem' />
        </i>

        {props.item.title}

      </SidebarMenuHeading>
    </label>

    <ul onclick={ev => {
      // TODO: Move into a function / action
      ev.preventDefault()
      const url = ev.target.pathname
      const id = url.split('id=')[1]

      if (/posts/.test(url)) {
        props.actions.selectPost(id)
      }

      props.actions.router.go(url)
    }}>

      {
        children.map(child =>
          <SidebarMenuListItem
            title={child.title || child.name}
            isActive={props.model.router.params.id === child._id}
            href={`/dashboard/${props.item.href}/id=${child._id}`} />
        )
      }

    </ul>
  </div>
)
