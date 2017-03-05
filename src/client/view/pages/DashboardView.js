/* eslint-disable */
import { h } from 'hyperapp' // eslint-disable-line

export default model =>
  <div id='app' className='dashboard-view'>
    <input
      hidden
      id='nav-toggler'
      type='checkbox' />
    <nav style={{
      position: 'relative',
      width: '40%',
      zIndex: 5,
      float: 'left',
      height: '100%'
     }}>
     <button style={{
        position: 'absolute',
        right: '-1.5rem',
        paddingLeft: '0.5rem',
        top: '0.5rem',
        lineHeight: '1.5rem',
        transform: 'translateZ(40)'
      }}>
       <label
         id='nav-toggler-btn'
         for='nav-toggler'>@</label>
     </button>
      <div
        className="sidebar"
        style={{
          background: 'steelblue',
          height: '100%',
          padding: '0 0.5rem'
        }}>
        <header style={{
          justifyContent: 'flex-start'
        }}>
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
              <h3
                style={{
                  margin: 0
                }}>{i.icon} {i.title}</h3>
              {i.items.map(item =>
                <li style={{
                  paddingLeft: '1.5em'
                }}>{item.title}</li>
              )}
            </ul>
          )
        }</section>
      </div>
    </nav>
    <main style={{
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      overflowY: 'hidden'
    }}>
      <header style={{
        background: '#fff',
        right: 0,
        width: '60%',
        padding: '0.5rem',
        position: 'fixed',
        zIndex: 0,
      }}>
        <ul>
          {model.writing
            ? <ul style={{
              display: 'flex'
            }}>
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
                <div
                  id='info-menu'>foo</div>
              </li>
              <li>
                <button>submit</button>
              </li>
            </ul> : <div>new</div>}
        </ul>
      </header>
      {(model.writing)
        ? <section style={{
          marginTop: '40px',
          overflowY: 'visible',
          scroll: 'none'
        }}>
          <textarea
            name='editor'
            id='editor'
            cols='30'
            rows='30'
            placeholder='# your header here...'
            value={model.selected
              ? model.posts.find(p => p.id === model.selected).md
              : ''
            }
            oncreate={el => {
              const height = window.innerHeight - 40
              el.rows = height / 16
            }}
            style={{
              resize: 'none',
              width: '100%',
              overflowY: 'scroll'
            }}
          />
        </section>
        : <section>bar</section>}
    </main>
  </div>
