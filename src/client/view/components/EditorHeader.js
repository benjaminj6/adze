import { h } from 'hyperapp' // eslint-disable-line

import { Close, Save, SaveCheck, Tag, Trash } from './Icons'
import AddTagsMenu from './AddTagsMenu'
import Toggler from './Toggler'

const createSaveClickHandler = (newContent, actions) => {
  const savable = newContent.title && newContent.md
  const isNewPost = /create/.test(window.location.pathname)
  const isUpdatedPost = /posts/.test(window.location.pathname)

  return ev => {
    if (savable && isNewPost) {
      actions.saveNewPost({ ...newContent })
    }

    if (savable && isUpdatedPost) {
      actions.saveUpdatedPost(newContent)
    }
  }
}

const SaveButton = ({ saved, newContent, actions }) => (
  <button>
    {
      saved
      ? <SaveCheck />
      : <Save
        onclick={createSaveClickHandler(newContent, actions)}
        style={{
          color: newContent.title && newContent.md
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
      newContent={model.newContent}
      saved={model.saved} />,
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

  return (
    <header>
      <ul>
        {buttons.map(b => <li>{b}</li>)}
      </ul>
    </header>
  )
}
