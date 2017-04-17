import { h } from 'hyperapp' // eslint-disable-line

import { Close, Paint, Plus } from '../general/Icons'
import styles from '../../styles/foundation.json'

export default ({ post, actions }) => {
  const addNewTagHandler = ev => {
    ev.preventDefault()
    if (/tag-applied/.test(ev.target.id)) {
      const id = ev.target.id.split(/tag-applied-/)[1]
      actions.removeStagedTag(id)
    }
  }

  const createTags = t => (
    <li
      style={{ background: t.color }}>
      <form
        id={`tag-applied-${t._id}`}
        action=''>
        <span>{t.name}</span>

        <button type='submit'>
          <Close height='1em' />
        </button>
      </form>
    </li>
  )

  const formSubmitHandler = ev => {
    ev.preventDefault()
    const form = ev.target
    const name = form.querySelector(`[name='name']`)
    const color = form.querySelector(`[name='color']`)

    actions.addStagedTag({
      name: name.value,
      color: color.value,
      _id: Date.now().toString()
    })

    name.value = ''
    color.value = styles['accent-lighter']
    form.style.background = '#fff'
    form.style.color = '#000'
  }

  const colorInputHandler = ev => {
    const form = document.getElementById('add-tag')
    form.style.background = e.target.value
    form.style.color = '#fff'
  }

  return (
    <div id='info-menu'>
      <h3>Tags</h3>

      <ul
        className='tags'
        onsubmit={addNewTagHandler}>
        {post ? post.tags.map(createTags) : ''}
      </ul>

      <form
        action=''
        id='add-tag'
        onsubmit={formSubmitHandler}>
        <input
          name='name'
          placeholder='add a tag'
          type='text' />

        <input
          defaultValue={styles['accent-lighter']}
          id='color-picker'
          name='color'
          oninput={colorInputHandler}
          type='color' />

        <label
          htmlFor='color-picker'
          id='color-picker-btn'>
          <Paint height='1rem' width='1rem' />
        </label>

        <button type='submit'>
          <Plus />
        </button>
      </form>
    </div>
  )
}
