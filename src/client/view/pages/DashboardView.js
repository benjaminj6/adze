import { h } from 'hyperapp' // eslint-disable-line
import debounce from 'lodash.debounce' // eslint-disable-line

import styles from '../../styles/foundation.json'

import {
  AngleDown,
  Close,
  FilePlus, // eslint-disable-line
  Logout,
  Menu,
  Paint,
  Plus,
  Save,
  SaveCheck, // eslint-disable-line
  Tag,
  Trash,
  User // eslint-disable-line
} from '../components/Icons'

const Editor = ({ post, actions }) => (
  <section className='editor-section'>
    <header>
      <input
        name='title'
        placeholder='my new post'
        value={post ? post.title : ''}
        type='text'
        oninput={
          debounce(({ target }) => {
            actions.updateStagedTitle(target.value)
          }, 500)
        } />
      <h6>({new Date(post.date || Date.now()).toDateString()})</h6>
    </header>
    <textarea
      name='editor'
      id='editor'
      cols='50'
      rows='30'
      placeholder='your content here...'
      value={
        post ? post.md : ''
      }
      oninput={
        debounce(({ target }) => { actions.updateStagedPost(target.value) }, 500)
      }
      oncreate={el => {
        const height = window.innerHeight - 40
        el.rows = height / 16
      }} />
  </section>
)

const AddTagsMenu = ({ post, actions }) => (
  <div id='info-menu'>
    <h3>Tags</h3>
    <ul
      className='tags'
      onsubmit={
        ev => {
          ev.preventDefault()
          if (/tag-applied/.test(ev.target.id)) {
            const id = ev.target.id.split(/tag-applied-/)[1]
            actions.removeStagedTag(id)
          }
        }
      }>
      {
        post ? post.tags.map(t =>
          <li
            style={{ background: t.color }}>
            <form
              id={`tag-applied-${t._id}`}
              action=''>
              <span>{t.name}</span>
              <button type='submit'>
                <Close height='1em' />
              </button>
            </form>
          </li>
        ) : ''
      }
    </ul>
    <form
      id='add-tag'
      action=''
      onsubmit={ev => {
        ev.preventDefault()
        const form = ev.target
        const name = form.querySelector(`[name='name']`)
        const color = form.querySelector(`[name='color']`)

        actions.addStagedTag({
          name: name.value,
          color: color.value,
          _id: Date.now().toString()
        })

        name.value = ''
        color.value = styles.accent
        form.style.background = '#fff'
        form.style.color = '#000'
      }}>
      <input
        name='name'
        placeholder='add a tag'
        type='text' />
      <input
        id='color-picker'
        type='color'
        name='color'
        defaultValue={styles.accent}
        oninput={e => {
          const form = document.getElementById('add-tag')
          form.style.background = e.target.value
          form.style.color = '#fff'
        }} />
      <label
        id='color-picker-btn'
        htmlFor='color-picker'>
        <Paint height='1rem' width='1rem' />
      </label>
      <button type='submit'>
        <Plus />
      </button>
    </form>
  </div>
)

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
        : <PromptView model={model} actions={actions} />
      }
    </div>
  )
}
