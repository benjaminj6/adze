/* eslint-disable */
import { h } from 'hyperapp'
import hyperx from 'hyperx'

const html = hyperx(h)

const textarea = (props) => html`
  <textarea
    name=${props.name}
    id=${props.id}
    cols=${props.size ? props.size.cols : 30}
    rows=${props.size ? props.size.rows : 1}
    placeholder=${props.placeholder || 'Input here...'}
    onkeyup=${props.resize || ''}
    onkeydown=${props.resize || ''}
    value=${props.value || ''}></textarea>
`

export default () => html`
  <section id="editor">
    <form action="">
      ${textarea({
        name: 'title',
        id: 'editor-title',
        placeholder: 'title...',
        resize: autoSize
      })}
      ${textarea({
        name: 'post',
        id: 'editor-post',
        placeholder: 'post goes here...',
        resize: autoSize
      })}
    </form>
  </section>
`

// TODO: display editor conditionally -- only if there is a file shown
// TODO: add a handler to increase the size of textarea on newlines
// TODO: find way to make form input DRY-er

function autoSize ({ target }) {
  target.style.height = 'auto'
  if (target.scrollHeight > (target.clientHeight + 16)) {
    target.style.height = `${target.scrollHeight + 16}px`
  }
}
