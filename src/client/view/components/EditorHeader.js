import { h } from 'hyperapp' // eslint-disable-line

import { Close, Save, SaveCheck, Tag, Trash } from './Icons'
import AddTagsMenu from './AddTagsMenu'
import Toggler from './Toggler'

const SaveButton = ({ model, actions }) => (
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
)

const AddTagsToggler = ({ actions, selected }) => (
  <Toggler
    id='info-toggler'
    className='add-tags-toggler'>
    <Tag />
    <AddTagsMenu
      actions={actions}
      post={selected || ''} />
  </Toggler>
)

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

const getCurrentHeaderButtons = (model, actions, selected) => {
  const buttons = [
    <SaveButton
      actions={actions}
      model={model} />,
    <AddTagsToggler
      actions={actions}
      selected={selected} />
  ]

  if (/create/.test(window.location.pathname)) {
    return buttons.concat([<CancelButton actions={actions} />])
  }

  return buttons.concat([
    <DeleteButton
      actions={actions}
      id={model.newContent._id} />
  ])
}

export default ({ model, actions, selected }) => {
  const buttons = getCurrentHeaderButtons(model, actions, selected)
  console.log(buttons)

  return (
    <header>
      <ul>
        {buttons.map(b => <li>{b}</li>)}
      </ul>
    </header>
  )
}
