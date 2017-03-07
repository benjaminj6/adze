import { h } from 'hyperapp' // eslint-disable-line
import styles from '../../styles/foundation.json'

import {
  AngleDown,
  Close,
  Menu,
  Paint,
  Plus,
  Save,
  Tag,
  Trash,
  User
} from '../components/Icons'

const Editor = ({ post }) => (
  <section className='editor-section'>
    <header>
      <input
        name='title'
        placeholder='my new post'
        value={post ? post.title : ''}
        type='text' />
      <h6>({post ? post.date.toDateString() : new Date().toDateString()})</h6>
    </header>
    <textarea
      name='editor'
      id='editor'
      cols='50'
      rows='30'
      placeholder='start your post right here...'
      value={
        post ? post.md : ''
      }
      oncreate={el => {
        const height = window.innerHeight - 40
        el.rows = height / 16
      }} />
  </section>
)

const AddTagsMenu = ({ post }) => (
  <div id='info-menu'>
    <h3>Tags</h3>
    <ul className='tags'>
      {
        post ? post.tags.map(t =>
          <li
            oncreate={el => { console.log(t) }}
            style={{ background: t.color }}>
            {t.title} <button><Close height='1em' /></button>
          </li>
        ) : ''
      }
    </ul>
    <form
      id='add-tag'
      action=''>
      <input
        name='title'
        placeholder='add a tag'
        type='text' />
      <input
        id='color-picker'
        type='color'
        defaultValue='#eeeeee'
        oninput={e => {
          document.getElementById('color-picker-btn').querySelector('.bar').style.fill = e.target.value
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

const EditorView = ({ model, selected }, children) => (
  <main oncreate={el => { console.log(model) }}>
    <header>
      <ul>
        <li>
          <button><Save /></button>
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
            oncreate={ev => { console.log(ev) }}
            post={selected || ''} />
        </li>
        {selected
          ? <li>
            <button>
              <Trash />
            </button>
          </li>
          : ''
        }
      </ul>
    </header>
    <Editor post={selected} />
  </main>
)

const PromptView = ({ model }) => (
  <main>
    <header>
      <button><Plus /></button>
    </header>
    <section className='prompt'>
      <h2>
        Choose a post on the left to edit it.
        <br />
        Or you can start a <span>new one today</span>.
      </h2>
    </section>
  </main>
)

export default (model, actions) =>
  <div id='app' className='dashboard-view'>
    <input
      hidden
      id='nav-toggler'
      type='checkbox' />
    <nav id='nav'>
      <button id='nav-toggler-btn'>
        <label for='nav-toggler'><Menu /></label>
      </button>
      <div id='sidebar'>
        <header>
          <button>
            <User /><span>{model.email}</span>
          </button>
        </header>
        <section>
          <div className='new-post'>
            <h3 style={{
              background: /create/.test(model.router.match) ? '#fff' : ''
            }}>
              <a href='/dashboard/create'>
                <Plus height='1rem' />
                New Post
              </a>
            </h3>
          </div>
          {
            [
              { title: 'Recent Posts', href: 'posts', icon: <Menu height='1rem' />, items: model.posts },
              { title: 'Categories', href: 'tags', icon: <Tag height='1rem' />, items: model.tags }
            ].map(i =>
              <div
                className='menu-list'>
                <input
                  hidden
                  checked
                  id={`${i.title.toLowerCase()}-toggler`}
                  type='checkbox'
                  name='menu-item-toggler' />
                <h3>
                  <label htmlFor={`${i.title.toLowerCase()}-toggler`}>
                    <i>{i.icon}</i>
                    {i.title}
                    <i className='icon-toggle open'>
                      <AngleDown />
                    </i>
                    <i className='icon-toggle closed'>
                      <Close height='1rem' />
                    </i>
                  </label>
                </h3>
                <ul>
                  {i.items.map(item =>
                    <li>
                      <a
                        style={{
                          background: model.router.params.id === item.id ? '#fff' : '',
                          borderLeft: model.router.params.id === item.id ? `0.25rem solid ${styles.accent}` : '',
                          color: model.router.params.id === item.id ? styles.accent : ''
                        }}
                        href={`/dashboard/${i.href}/id=${item.id}`}onclick={ev => {
                          console.log(ev.target.pathname)
                          ev.preventDefault()
                          actions.router.go(ev.target.pathname)
                        }}>
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
    {
      /posts|create/.test(model.router.match)
      ? <EditorView
        model={model}
        selected={model.posts.find(p => p.id === model.router.params.id)} />
      : <PromptView model={model} />
    }
  </div>
