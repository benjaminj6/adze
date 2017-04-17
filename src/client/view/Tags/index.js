import { h } from 'hyperapp' // eslint-disable-line
import debounce from 'lodash.debounce'

import PostCard from './PostCard'
import InputHeader from '../InputHeader'
import HeaderButtons from '../components/HeaderButtons'

import { Trash, Save, SaveCheck, Paint } from '../Icons'
import styles from '../../styles/foundation.json'

const getTagHeaderButtons = (model, actions) => {
  const savable = model.newTagData.name
  const saveButton = (savable && model.newTagDataSaved)
    ? <SaveCheck />
    : <Save
      style={{
        color: !savable ? 'rgba(0, 0, 0, 0.1)' : ''
      }} />

  return [
    <label htmlFor='edit-tag-submit'>{saveButton}</label>,
    <label htmlFor='edit-tag-color'><Paint /></label>,
    <Trash onclick={ev => actions.deleteTag(model.router.params.id)} />
  ]
}

export default ({ model, actions, tag }) => {
  let posts = []

  if (tag) {
    posts = model.posts.filter(p => {
      return p.tags.find(t => t._id === tag._id)
    })
  }

  const buttons = getTagHeaderButtons(model, actions)

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
          <form
            id='edit-tag'
            oncreate={el => {
              console.log('created')
            }}
            onremove={el => {
              console.log('removed')
            }}
            onsubmit={ev => {
              ev.preventDefault()
              if (!model.newTagDataSaved) {
                actions.saveTag({ ...model.newTagData })
              }
            }}>
            <InputHeader
              className='tag-input-header'
              name='name'
              placeholder='tag name'
              value={tag ? tag.name : ''}
              oninput={
                debounce(({ target }) => {
                  console.log('this runs')
                  actions.stageTagName(target.value)
                }, 300)
              } />
            <input
              hidden
              id='edit-tag-color'
              name='color'
              defaultValue={styles['accent-lighter']}
              type='color' />
            <input
              hidden
              id='edit-tag-submit'
              type='submit' />
          </form>
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
