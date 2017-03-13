import { h } from 'hyperapp' // eslint-disable-line

import Editor from './components/Editor'
import Prompt from './components/Prompt'
import Tags from './components/Tags'
import Sidebar from './components/Sidebar'

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
