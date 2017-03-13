import { h } from 'hyperapp' // eslint-disable-line

import EditorView from '../components/EditorView'
import PromptView from '../components/PromptView'
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
        ? <EditorView model={model}
          actions={actions}
          selected={model.newContent} />
        : /tags/.test(window.location.pathname)
          ? <TagsView
            model={model}
            actions={actions}
            tag={
              model.tags.find(t => t._id === model.router.params.id)
            } />
          : <PromptView
            model={model}
            actions={actions} />
      }
    </div>
  )
}
