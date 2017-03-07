/* eslint-disable */
import { h } from 'hyperapp' // eslint-disable-line
import styles from '../../styles/foundation.json'

import {
  AngleDown,
  Close,
  Calendar,
  Menu,
  More,
  Paint,
  Plus,
  Save,
  Tag,
  Trash,
  User
} from '../components/Icons'

const Editor = ({ post }) => (
  <section className='editor-section'>
    <input
      name='title'
      placeholder='my new post'
      value={post ? post.title : ''}
      type='text' />
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

const EditorView = ({ model }) => (
  <main>
    <header>
      {
        model.writing
        ? <ul>
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
              post={model.posts.find(p => p.id === model.router.params.id)} />
          </li>
          <li>
            <button>
              <Trash />
            </button>
          </li>
        </ul> : <div><Plus /></div>
      }
    </header>
    {/posts|create/.test(model.router.match)
      ? <Editor post={model.posts.find(p => p.id === model.router.params.id)} />
      : <section className='prompt'>
        <h1>
          Choose a post on the left to edit it.
          <br />
          Or you can start a <span>new one today</span>.
        </h1>
      </section>}
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
        <section>{
          [
            { title: 'Posts', items: model.posts },
            { title: 'Tags', items: model.tags }
          ].map(i =>
            <div
              className='menu-list'>
              <input
                hidden
                checked
                id={`${i.title}-toggler`}
                type='checkbox'
                name='menu-item-toggler' />
              <h3>
                <label htmlFor={`${i.title}-toggler`}>
                  <i className='icon-toggle'>
                    <AngleDown />
                  </i>
                  {i.title}
                </label>
              </h3>
              <ul>
                {i.items.map(item =>
                  <li>
                    <a
                      style={{
                        background: model.router.params.id === item.id ? '#fff' : '',
                        borderLeft: model.router.params.id === item.id ? `0.25rem solid ${styles.accent}` : ''
                      }}
                      href={`/dashboard/${i.title.toLowerCase()}/id=${item.id}`}onclick={ev => {
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
        }</section>
      </div>
    </nav>
    {/* Separate into own module */}
    <EditorView model={{...model}} />
  </div>
