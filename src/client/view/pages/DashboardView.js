import { h } from 'hyperapp' // eslint-disable-line
import debounce from 'lodash.debounce' // eslint-disable-line

import styles from '../../styles/foundation.json'

import {
  AngleDown,
  Close,
  FileMultiple,
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
      <h6>({post ? post.date.toDateString() : new Date().toDateString()})</h6>
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
            console.log('got it')
            const id = ev.target.id.split(/tag-applied-/)[1]
            console.log(id)
            actions.removeStagedTag(id)
          }
        }
      }>
      {
        post ? post.tags.map(t =>
          <li
            oncreate={el => { console.log(t) }}
            style={{ background: t.color }}>
            <form
              id={`tag-applied-${t.id}`}
              action=''>
              <span>{t.title}</span>
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
        const title = form.querySelector(`[name='title']`)
        const color = form.querySelector(`[name='color']`)

        actions.addStagedTag({
          title: title.value,
          color: color.value,
          id: Date.now().toString()
        })

        title.value = ''
        color.value = styles.accent
        form.style.background = '#fff'
        form.style.color = '#000'
      }}>
      <input
        name='title'
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
                      // TODO: DB calls
                      console.log('this will write to db')

                      // TODO: Dummy data added until DB calls are done
                      const post = {
                        ...model.newContent,
                        id: Date.now().toString()
                      }

                      actions.addPost(post)
                      actions.router.go(`/dashboard/posts/id=${post.id}`)
                    }

                    if (/posts/.test(model.router.match)) {
                      actions.updatePost(model.newContent)
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
            oncreate={ev => { console.log(ev) }}
            post={selected || ''} />
        </li>
        {selected
          ? <li>
            <button onclick={_ => {
              if (model.newContent.id) {
                actions.deletePost(model.newContent.id)
              }

              actions.router.go('/dashboard')
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

const PromptView = ({ model }) => (
  <main>
    <header />
    <section className='prompt'>
      <h2>
        You can select posts and categories on the left.
        <br />
        Or you can start a <a href='/dashboard/create'>new one today</a>.
      </h2>
    </section>
  </main>
)

const Sidebar = ({ model, actions }) =>
  <nav id='nav'>
    <label id='nav-toggler-btn' for='nav-toggler'><Menu /></label>
    <div id='sidebar'>
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
      <section>
        <div className='new-post'>
          <h3 style={{
            background: /create/.test(model.router.match) ? '#fff' : '',
            color: /create/.test(model.router.match) ? 'rgba(0, 0, 0, 0.8)' : ''
          }}>
            <a
              href='/dashboard/create'
              onclick={ev => {
                ev.preventDefault()
                actions.clearNewContent()
                actions.router.go('/dashboard/create')
              }}>
              New Post
            </a>
          </h3>
        </div>
        {
          [
            {
              title: 'Recent Posts',
              href: 'posts',
              icon: <FileMultiple height='1rem' />,
              items: model.posts
            },
            {
              title: 'Categories',
              href: 'tags',
              icon: <Tag height='1rem' />,
              items: model.tags
            }
          ].map(i =>
            <div className='menu-list'>
              <input
                hidden
                checked
                id={`${i.title.toLowerCase()}-toggler`}
                type='checkbox'
                name='menu-item-toggler' />
              <h3
                className={model.router.match.includes(i.href)
                  ? 'selected '
                  : ''
              }>
                <label htmlFor={`${i.title.toLowerCase()}-toggler`}>
                  <i className='icon-toggle open'>
                    <Plus height='1rem' />
                  </i>
                  <i className='icon-toggle closed'>
                    <Close height='1rem' />
                  </i>
                  {i.title}
                </label>
              </h3>
              <ul onclick={ev => {
                ev.preventDefault()
                const url = ev.target.pathname
                const id = url.split('id=')[1]
                console.log(id)

                if (/posts/.test(url)) {
                  actions.selectPost(id)
                }

                actions.router.go(url)
              }}>
                {i.items.map(item =>
                  <li>
                    <a
                      style={{
                        background: model.router.params.id === item.id ? '#fff' : '',
                        borderLeft: model.router.params.id === item.id ? `0.25rem solid ${styles.accent}` : '',
                        color: model.router.params.id === item.id ? styles.accent : ''
                      }}
                      href={`/dashboard/${i.href}/id=${item.id}`}>
                      {item.title}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )
        }
      </section>
    </div>
  </nav>

export default (model, actions) =>
  <div id='app' className='dashboard-view'>
    <input
      hidden
      id='nav-toggler'
      type='checkbox' />
    <Sidebar model={model} actions={actions} />
    {
      /posts|create/.test(model.router.match)
      ? <EditorView
        model={model}
        actions={actions}
        selected={model.newContent} />
      : <PromptView model={model} />
    }
  </div>
