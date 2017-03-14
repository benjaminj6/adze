import { h } from 'hyperapp' // eslint-disable-line
import debounce from 'lodash.debounce'

import PostCard from './PostCard'
import InputHeader from '../InputHeader'
import HeaderButtons from '../HeaderButtons'

import { Trash, Save, SaveCheck, Paint } from '../Icons'

const getTagHeaderButtons = newTagData => {
  const savable = newTagData.name || newTagData.color
  const saveButton = savable ? <Save /> : <SaveCheck />

  return [
    saveButton,
    <Paint />,
    <Trash />
  ]
}

export default ({ model, actions, tag }) => {
  const posts = model.posts.filter(p => {
    return p.tags.find(t => t._id === tag._id)
  })

  const buttons = getTagHeaderButtons(model.newTagData)

  return (
    <main>
      <header className='tags-header'>
        <HeaderButtons buttons={buttons} />
      </header>
      {/* TODO: move into .scss */}
      <section className='tags-section' style={{
        padding: '3rem 5%'
      }}>
        <header>
          <InputHeader
            className='tag-input-header'
            name='name'
            placeholder='tag name'
            value={tag ? tag.name : ''}
            oninput={
              debounce(({ target }) => {
                actions.stageTagName(target.value)
              }, 300)
            } />
          <h6>({
            posts.length === 1
            ? `${posts.length} post`
            : `${posts.length} posts`
          })</h6>
        </header>
        <section className='posts'>
          <ul>
            {posts.map(p => <PostCard post={p} actions={actions} />)}
          </ul>
        </section>
      </section>
    </main>
  )
}
