/* eslint-disable */
import { h } from 'hyperapp' // eslint-disable-line

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
      <div id="sidebar">
        <header>
          <button>
            @ email
          </button>
        </header>
        <section>{
          [
            { title: 'Posts', icon: '@', items: model.posts },
            { title: 'Tags', icon: '@', items: model.tags }
          ].map(i =>
            <ul>
              <h3>{i.icon} {i.title}</h3>
              {i.items.map(item =>
                <li>{item.title}</li>
              )}
            </ul>
          )
        }</section>
      </div>
    </nav>
    <main>
      <header>
          {model.writing
            ? <ul>
              <li>
                <button>@</button>
              </li>
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
                <button>submit</button>
              </li>
            </ul> : <div>new</div>}
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
        : <section className='prompt' style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h1>
            Choose a post on the left to edit it.
            <br />
            Or you can start a <span>new one today</span>.
          </h1>
        </section>}
    </main>
  </div>
