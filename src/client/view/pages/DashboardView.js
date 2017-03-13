import { h } from 'hyperapp' // eslint-disable-line

import styles from '../../styles/foundation.json'

import {
  AngleDown,
  Close,
  FilePlus, // eslint-disable-line
  Logout,
  Menu,
  Plus,
  Save,
  SaveCheck, // eslint-disable-line
  Tag,
  Trash,
  User // eslint-disable-line
} from '../components/Icons'

import Editor from '../components/Editor'
import AddTagsMenu from '../components/AddTagsMenu'
import PostCard from '../components/PostCard'

const EditorView = ({ model, selected, actions }, children) => (
  <main>
    <header>
      <ul>
        <li>
          <button>
            {
              model.saved
              ? <SaveCheck />
              : <Save
                onclick={ev => {
                  // TODO: This would make a great higher-level action
                  if (model.newContent.title && model.newContent.md) {
                    if (/create/.test(model.router.match)) {
                      actions.saveNewPost({ ...model.newContent })
                    }

                    if (/posts/.test(model.router.match)) {
                      actions.saveUpdatedPost(model.newContent)
                    }
                  }
                }}
                style={{
                  color: model.newContent.title && model.newContent.md
                    ? ''
                    : 'rgba(0, 0, 0, 0.05)'
                }} />
            }
          </button>
        </li>
        <li>
          <input
            hidden
            id='info-toggler'
            type='checkbox' />
          <button id='info-toggler-btn'>
            <label for='info-toggler'><Tag /></label>
          </button>
          <AddTagsMenu
            actions={actions}
            post={selected || ''} />
        </li>
        {selected
          ? <li>
            <button onclick={_ => {
              if (model.newContent._id) {
                actions.deletePost(model.newContent._id)
              } else {
                actions.router.go('/dashboard')
              }
            }}>
              {
                /create/.test(model.router.match)
                  ? <Close />
                  : <Trash />
              }
            </button>
          </li>
          : ''
        }
      </ul>
    </header>
    <Editor post={selected} actions={actions} />
  </main>
)

const TagsView = ({ model, actions, tag }) => {
  const posts = model.posts.filter(p => {
    return p.tags.find(t => t._id === tag._id)
  })

  return (
    <main>
      <section className='tags-section' style={{
        padding: '3rem 5%'
      }}>
        <header>
          {/* TODO: Move this into 'input-header' component */}
          <input
            className='input-header'
            name='name'
            placeholder='tag name'
            value={tag ? tag.name : ''}
            type='text' />
          <h6>({
            posts.length === 1
            ? `${posts.length} post`
            : `${posts.length} posts`
          })</h6>
        </header>
        <section className='posts'>
          <ul>
            {posts.map(p => <PostCard post={p} actions={actions} />)}
          </ul>
        </section>
      </section>
    </main>
  )
}

const PromptView = ({ model, actions }) => (
  <main>
    <header />
    <section className='prompt'>
      <h2>
        You can select posts and categories on the left.
        <br />
        Or you can start a <a
          href='/dashboard/create'
          onclick={ev => {
            ev.preventDefault()
            actions.router.go('/dashboard/create')
          }}>new one today</a>.
      </h2>
    </section>
  </main>
)

const SidebarHeader = ({ model, actions }) =>
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

const SidebarMenuHeading = (props, children) => {
  return (<h3
    {...props}
    className={props.isActive ? 'active' : ''}>
    {children}
  </h3>)
}

const SidebarMenuListItem = (props) => (
  <li>
    <a
      style={{
        background: props.isActive ? '#fff' : '',
        color: props.isActive ? styles.accent : ''
      }}
      href={props.href}>
      {props.title}
    </a>
  </li>
)

const MenuList = (props, children) => (
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

const SidebarBody = ({ model, actions }) => (
  <section>
    {
      model.nav.map(item =>
        item.children
        ? <MenuList model={model} item={item} actions={actions}>
          {model[item.children]}
        </MenuList>
        : <SidebarMenuHeading
          isActive={
            new RegExp(`${item.href}$`).test(model.router.match)
          }
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

const Sidebar = ({ model, actions }) =>
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

export default (model, actions) => {
  return (
    <div id='app' className='dashboard-view'>
      <input
        hidden
        id='nav-toggler'
        type='checkbox' />
      <Sidebar model={model} actions={actions} />
      {
        /posts|create/.test(model.router.match)
        ? <EditorView model={model}
          actions={actions}
          selected={model.newContent} />
        : /tags/.test(window.location.pathname)
          ? <TagsView
            model={model}
            actions={actions}
            tag={
              model.tags.find(t => t._id === model.router.params.id)
            } />
          : <PromptView
            model={model}
            actions={actions} />
      }
    </div>
  )
}
