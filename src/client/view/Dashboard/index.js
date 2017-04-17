import { h } from 'hyperapp' // eslint-disable-line

import Editor from '../Editor'
import Prompt from '../Prompt'
import Tags from '../Tags'
import Sidebar from '../Sidebar'

import Toggler from '../general/Toggler'
import { Menu } from '../general/Icons'

const getDashboardView = (model, actions) => {
  if (/posts|create/.test(window.location.pathname)) {
    return (
      <Editor model={model}
        actions={actions}
        selected={model.newContent} />
    )
  }

  if (/tags/.test(window.location.pathname)) {
    return (
      <Tags
        model={model}
        actions={actions}
        tag={
          model.tags.find(t => t._id === model.router.params.id)
        } />
    )
  }

  return (
    <Prompt
      model={model}
      actions={actions} />
  )
}

export default (model, actions) => (
  <div id='app' className='dashboard-view'>
    <Toggler id='nav-toggler'>
      <Menu />
      <div id='nav-toggler-content'>
        <Sidebar model={model} actions={actions} />
        {getDashboardView(model, actions)}
      </div>
    </Toggler>
  </div>
)
