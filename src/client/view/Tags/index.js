import { h } from 'hyperapp' // eslint-disable-line
import debounce from 'lodash.debounce'

import PostCard from './PostCard'
import InputHeader from '../general/InputHeader'
import HeaderButtons from '../general/HeaderButtons'
import { Trash, Save, SaveCheck, Paint } from '../general/Icons'

import styles from '../../styles/foundation.json'

const getTagHeaderButtons = (model, actions) => {
  const savable = model.newTagData.name
  const saveButton = (savable && model.newTagDataSaved)
    ? <SaveCheck />
    : <Save style={{color: !savable ? 'rgba(0, 0, 0, 0.1)' : ''}} />

  return [
    <label htmlFor='edit-tag-submit'>{saveButton}</label>,
    <label htmlFor='edit-tag-color'><Paint /></label>,
    <Trash onclick={ev => actions.deleteTag(model.router.params.id)} />
  ]
}

export default ({ model, actions, tag }) => {
  let posts = []

  if (tag) {
    posts = model.posts.filter(p => p.tags.find(t => t._id === tag._id))
  }

  const buttons = getTagHeaderButtons(model, actions)

  // Event handlers
  const debounceInput = debounce(({ target }) => actions.stageTagName(target.value), 300)
  const formSubmitHandler = ev => {
    ev.preventDefault()
    if (!model.newTagDataSaved) {
      actions.saveTag({ ...model.newTagData })
    }
  }

  return (
    <main>
      <header className='tags-header'>
        <HeaderButtons buttons={buttons} />
      </header>

      <section className='tags-section'>
        <header>
          <form
            id='edit-tag'
            onsubmit={formSubmitHandler}>
            <InputHeader
              className='tag-input-header'
              name='name'
              oninput={debounceInput}
              placeholder='tag name'
              value={tag ? tag.name : ''} />

            <input
              defaultValue={styles['accent-lighter']}
              hidden
              id='edit-tag-color'
              name='color'
              type='color' />

            <input
              hidden
              id='edit-tag-submit'
              type='submit' />
          </form>
          <h6>
            ({
              posts.length === 1
                ? `${posts.length} post`
                : `${posts.length} posts`
            })
          </h6>
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
