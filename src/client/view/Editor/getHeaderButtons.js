import { h } from 'hyperapp' // eslint-disable-line

import { AddTagsToggler, CancelButton, DeleteButton, SaveButton } from './HeaderButtonTypes'

export default (model, actions, selected) => {
  // Default array of buttons to be used
  const buttons = [
    <SaveButton
      actions={actions}
      newContent={model.newContent}
      saved={model.newContentSaved} />,
    <AddTagsToggler
      actions={actions}
      selected={selected} />
  ]

  if (/create/.test(window.location.pathname)) {
    buttons.push(<CancelButton actions={actions} />)
    return buttons
  }

  buttons.push(
    <DeleteButton
      actions={actions}
      id={model.newContent._id} />
  )

  return buttons
}
