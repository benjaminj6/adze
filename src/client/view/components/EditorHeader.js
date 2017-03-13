import { h } from 'hyperapp' // eslint-disable-line

import { Close, Save, SaveCheck, Tag, Trash } from './Icons'
import AddTagsMenu from './AddTagsMenu'
import Toggler from './Toggler'

const CancelButton = ({ actions }) => (
  <button onclick={_ => actions.router.go('/dashboard')}>
    <Close />
  </button>
)

const DeleteButton = ({ id, actions }) => (
  <button onclick={_ => actions.deletePost(id)}>
    <Trash />
  </button>
)

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
        <Toggler
          id='info-toggler'
          className='add-tags-toggler'>
          <Tag />
          <AddTagsMenu
            actions={actions}
            post={selected || ''} />
        </Toggler>
      </li>
      {selected
        ? <li>
          {
            /create/.test(model.router.match)
            ? <CancelButton actions={actions} />
            : <DeleteButton actions={actions} id={model.newContent._id} />
          }
        </li>
        : ''
      }
    </ul>
  </header>
)
