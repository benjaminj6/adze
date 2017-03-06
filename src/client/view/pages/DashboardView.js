import { h } from 'hyperapp' // eslint-disable-line
import styles from '../../styles/foundation.json'

import {
  AngleDown,
  Menu,
  More,
  Paint,
  Plus,
  Save,
  User
} from '../components/Icons'

export default model =>
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
            <User /><span>email</span>
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
                  <li
                    style={{
                      background: model.selected === item.id ? '#fff' : '',
                      borderLeft: model.selected === item.id ? `0.25rem solid ${styles.accent}` : ''
                    }}
                    oncreate={el => { console.log(model, item.id) }}>
                    {item.title}
                  </li>
                )}
              </ul>
            </div>
          )
        }</section>
      </div>
    </nav>
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
                checked
                id='info-toggler'
                type='checkbox' />
              <button id='info-toggler-btn'>
                <label for='info-toggler'><More /></label>
              </button>
              <div id='info-menu'>
                <ul>
                  {
                    model.selected
                    ? <li>
                      Created: {model.posts.find(p => p.id === model.selected).date}
                    </li> : ''
                  }
                  <li>
                    <span>Tags:</span>
                    <ul className='tags'>
                      {
                        model.current
                        ? model.current.tags.map(t =>
                          <li style={{ background: t.color }}>{t.title}</li>
                        )
                        : ''
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
                  </li>
                  <li>Delete post</li>
                </ul>
              </div>
            </li>
          </ul> : <div><Plus /></div>
        }
      </header>
      {model.writing
        ? <section className='editor-section'>
          <input
            name='title'
            placeholder='My post'
            type='text' />
          <textarea
            name='editor'
            id='editor'
            cols='50'
            rows='30'
            placeholder='# your header here...'
            value={model.selected
              ? model.posts.find(p => p.id === model.selected).md
              : ''
            }
            oncreate={el => {
              const height = window.innerHeight - 40
              el.rows = height / 16
            }} />
        </section>
        : <section className='prompt'>
          <h1>
            Choose a post on the left to edit it.
            <br />
            Or you can start a <span>new one today</span>.
          </h1>
        </section>}
    </main>
  </div>
