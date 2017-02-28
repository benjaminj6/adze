/* eslint-disable */
import { html } from '../utils'

import button from './button'

const textarea = (props) => html`
  <textarea
    name=${props.name}
    id=${props.id}
    cols=${props.cols || 30}
    rows=${props.rows || 3}
    placeholder=${props.placeholder || 'Input here...'}
    onkeyup=${props.resize || ''}
    onkeydown=${props.resize || ''}
    value=${props.value || ''}></textarea>
`

const buttons = ['a', 'b']
const saveBtn = ['save']

export default () => html`
  <section id="editor">
    <form action="">
      ${textarea({
        name: 'post',
        id: 'editor-post',
        placeholder: '# my new blog post...',
        resize: autoSize
      })}
      <fieldset class="form-btns">
      </fieldset>
    </form>
  </section>
`

// TODO: display editor conditionally -- only if there is a file shown
// TODO: make editor smoother on newlines -- this has to do with the autosize...still needs to be accessible though

function autoSize (e) {
  const { target } = e
  target.style.height = 'auto'
  target.focus()
  if (target.scrollHeight > (target.clientHeight + 16)) {
    target.style.height = `${target.scrollHeight + 16}px`
  }
}
