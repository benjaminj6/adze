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
      width: '25%',
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
          background: '#ccc',
          height: '100%'
        }}>
        <header style={{
          justifyContent: 'flex-start',
          padding: '0 0.5rem',
          borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
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
            <ul style={{
              margin: 0
            }}>
              <h3
                style={{
                  margin: 0,
                  lineHeight: '2.5rem',
                  paddingLeft: '0.5rem'
                }}>{i.icon} {i.title}</h3>
              {i.items.map(item =>
                <li style={{
                  paddingLeft: '2em',
                  lineHeight: '2rem'
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
        width: '75%',
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
          scroll: 'none',
          height: '100%',
          display: 'flex',
          justifyContent: 'center'
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
              maxWidth: '30rem',
              overflowY: 'scroll',
              position: 'absolute'
            }}
          />
        </section>
        : <section style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <h1 style={{
            color: 'rgba(0, 0, 0, 0.4)',
            textAlign: 'center'

          }}>
            Choose a post on the left to edit it.
            <br />
            Or you can start a <span style={{
              textDecoration: 'underline'
            }}>new one today</span>.
          </h1>
        </section>}
    </main>
  </div>
