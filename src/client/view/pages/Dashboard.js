import { h } from 'hyperapp' // eslint-disable-line

import Editor from '../components/Editor'
import Prompt from '../components/Prompt'
import TagsView from '../components/TagsView'
import Sidebar from '../components/Sidebar'

export default (model, actions) => {
  return (
    <div id='app' className='dashboard-view'>
      <input
        hidden
        id='nav-toggler'
        type='checkbox' />
      <Sidebar model={model} actions={actions} />
      {
        /posts|create/.test(model.router.match)
        ? <Editor model={model}
          actions={actions}
          selected={model.newContent} />
        : /tags/.test(window.location.pathname)
          ? <TagsView
            model={model}
            actions={actions}
            tag={
              model.tags.find(t => t._id === model.router.params.id)
            } />
          : <Prompt
            model={model}
            actions={actions} />
      }
    </div>
  )
}
