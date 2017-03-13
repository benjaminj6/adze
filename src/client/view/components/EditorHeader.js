import { h } from 'hyperapp' // eslint-disable-line

import { Close, Save, SaveCheck, Tag, Trash } from './Icons'
import AddTagsMenu from './AddTagsMenu'
import Toggler from './Toggler'

export default ({ model, actions, selected }) => (
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
        <Toggler id='info-toggler'>
          <Tag />
          <AddTagsMenu
            actions={actions}
            post={selected || ''} />
        </Toggler>
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

)
