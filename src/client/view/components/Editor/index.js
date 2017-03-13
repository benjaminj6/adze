import { h } from 'hyperapp' // eslint-disable-line

import PostEditor from './PostEditor'
import EditorHeader from './EditorHeader'

export default (props, children) => (
  <main>
    <EditorHeader {...props} />
    <PostEditor
      post={props.selected}
      actions={props.actions} />
  </main>
)
