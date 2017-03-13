import { h } from 'hyperapp' // eslint-disable-line

import AddTagsMenu from './AddTagsMenu'
import Editor from './Editor'
import { Close, Save, SaveCheck, Tag, Trash } from './Icons'

export default ({ model, selected, actions }, children) => (
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
