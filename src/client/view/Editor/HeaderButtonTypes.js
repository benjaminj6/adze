import { Close, Save, SaveCheck, Tag, Trash } from '../general/Icons'
import AddTagsMenu from './AddTagsMenu'
import Toggler from '../general/Toggler'

// Register the correct event based on current newContent state
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

export const SaveButton = ({ saved, newContent, actions }) => (
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

export const AddTagsToggler = ({ actions, selected }) => (
  <Toggler
    id='info-toggler'
    className='add-tags-toggler'>
    <Tag />
    <AddTagsMenu
      actions={actions}
      post={selected || ''} />
  </Toggler>
)

export const CancelButton = ({ actions }) => (
  <button onclick={() => actions.router.go('/dashboard')}>
    <Close />
  </button>
)

export const DeleteButton = ({ id, actions }) => (
  <button onclick={() => actions.deletePost(id)}>
    <Trash />
  </button>
)
