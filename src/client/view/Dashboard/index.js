import { h } from 'hyperapp' // eslint-disable-line

import Editor from '../Editor'
import Prompt from '../Prompt'
import Tags from '../Tags'
import Sidebar from '../Sidebar'

import Toggler from '../general/Toggler'
import { Menu } from '../general/Icons'

const getDashboardView = (model, actions) => {
  // Url paths that render the Editor view
  if (/posts|create/.test(window.location.pathname)) {
    return (
      <Editor
        actions={actions}
        model={model}
        selected={model.newContent} />
    )
  }

  // Url paths that render the Tags view
  if (/tags/.test(window.location.pathname)) {
    return (
      <Tags
        actions={actions}
        model={model}
        tag={model.tags.find(t => t._id === model.router.params.id)} />
    )
  }

  // Default returns the Prompt view
  return (
    <Prompt
      model={model}
      actions={actions} />
  )
}

export default (model, actions) => (
  <div
    id='app'
    className='dashboard-view'>
    <Toggler id='nav-toggler'>
      <Menu />
      <div id='nav-toggler-content'>
        <Sidebar model={model} actions={actions} />
        {getDashboardView(model, actions)}
      </div>
    </Toggler>
  </div>
)
