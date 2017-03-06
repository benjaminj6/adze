import { h } from 'hyperapp' // eslint-disable-line
import styles from '../../styles/foundation.json'

import { User } from '../components/Icons'

export default model =>
  <div id='app' className='dashboard-view'>
    <input
      hidden
      id='nav-toggler'
      type='checkbox' />
    <nav id='nav'>
      <button id='nav-toggler-btn'>
        <label for='nav-toggler'>@</label>
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
                checked={isSelected(i)}
                id={`${i.title}-toggler`}
                type='checkbox'
                name='menu-item-toggler' />
              <h3>
                <label htmlFor={`${i.title}-toggler`}>
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
              <button>
                <label for='info-toggler'>@</label>
              </button>
              <input
                hidden
                id='info-toggler'
                type='checkbox' />
              <div id='info-menu'>foo</div>
            </li>
            <li>
              <button>#</button>
            </li>
          </ul> : <div>+</div>
        }
      </header>
      {model.writing
        ? <section className='editor-section'>
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

function isSelected (el) {
  return window.location.pathname.includes(el.title.toLowerCase())
}
