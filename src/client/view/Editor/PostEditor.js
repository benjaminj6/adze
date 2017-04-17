import { h } from 'hyperapp' // eslint-disable-line
import debounce from 'lodash.debounce'

import InputHeader from '../general/InputHeader'

export default ({ post, actions }) => {
  const Header = () => (
    <header>
      <InputHeader
        name='title'
        oninput={
          debounce(({ target }) => {
            actions.updateStagedTitle(target.value)
          }, 500)
        }
        placeholder='my new post'
        value={post ? post.title : ''} />
      <h6>({new Date(post.date || Date.now()).toDateString()})</h6>
    </header>
  )

  const TextArea = () => (
    <textarea
      cols='50'
      id='editor'
      name='editor'
      oncreate={el => {
        const height = window.innerHeight - 40
        el.rows = height / 16
      }}
      oninput={debounce(({ target }) => { actions.updateStagedPost(target.value) }, 500)}
      placeholder='your content here...'
      rows='30'
      value={post ? post.md : ''} />
  )

  return (
    <section className='editor-section'>
      <Header />
      <TextArea />
    </section>
  )
}
