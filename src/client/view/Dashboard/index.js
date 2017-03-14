import { h } from 'hyperapp' // eslint-disable-line

import Editor from '../Editor'
import Prompt from '../Prompt'
import Tags from '../Tags'
import Sidebar from '../Sidebar'

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
    <input
      hidden
      id='nav-toggler'
      type='checkbox' />
    <Sidebar model={model} actions={actions} />
    {getDashboardView(model, actions)}
  </div>
)
