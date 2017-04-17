import { h } from 'hyperapp' // eslint-disable-line
import debounce from 'lodash.debounce'

import InputHeader from '../general/InputHeader'

export default ({ post, actions }) => {
  const Header = () => (
    <header>
      <InputHeader
        name='title'
        placeholder='my new post'
        value={post ? post.title : ''}
        oninput={
          debounce(({ target }) => {
            actions.updateStagedTitle(target.value)
          }, 500)
        } />
      <h6>({new Date(post.date || Date.now()).toDateString()})</h6>
    </header>
  )

  const TextArea = () => (
    <textarea
      name='editor'
      id='editor'
      cols='50'
      rows='30'
      placeholder='your content here...'
      value={post ? post.md : ''}
      oninput={debounce(({ target }) => { actions.updateStagedPost(target.value) }, 500)}
      oncreate={el => {
        const height = window.innerHeight - 40
        el.rows = height / 16
      }} />
  )

  return (
    <section className='editor-section'>
      <Header />
      <TextArea />
    </section>
  )
}

