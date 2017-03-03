import { h } from 'hyperapp' // eslint-disable-line

// import Button from './Button'

const TextArea = props =>
  <textarea
    name={props.name}
    id={props.id}
    cols={props.cols || 30}
    rows={props.rows || 2}
    placeholder={props.placeholder || 'Input here...'}
    onkeyup={props.resize || ''}
    onkeydown={props.resize || ''}
    value={props.value || ''}
    oncreate={getInitialSize}
  />

export default props =>
  <section id='editor'>
    <form action=''>
      <TextArea
        name='post'
        id='editor-post'
        placeholder='# your post begins here...'
        value={props.post || ''}
        resize={autoSize}
      />
    </form>
  </section>

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

function getInitialSize (el) {
  if (el.rows * 16 < el.scrollHeight) {
    el.rows = Math.ceil(el.scrollHeight / 16)
  }
}
