import { h } from 'hyperapp' // eslint-disable-line

import Editor from './Editor'
import EditorHeader from './EditorHeader'

export default (props, children) => (
  <main>
    <EditorHeader {...props} />
    <Editor
      post={props.selected}
      actions={props.actions} />
  </main>
)
