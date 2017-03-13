import { h } from 'hyperapp' // eslint-disable-line

import { Close, Paint, Plus } from '../Icons'
import styles from '../../styles/foundation.json'

export default ({ post, actions }) => (
  <div id='info-menu'>
    <h3>Tags</h3>
    <ul
      className='tags'
      onsubmit={
        ev => {
          ev.preventDefault()
          if (/tag-applied/.test(ev.target.id)) {
            const id = ev.target.id.split(/tag-applied-/)[1]
            actions.removeStagedTag(id)
          }
        }
      }>
      {
        post ? post.tags.map(t =>
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
        ) : ''
      }
    </ul>
    <form
      id='add-tag'
      action=''
      onsubmit={ev => {
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
        color.value = styles.accent
        form.style.background = '#fff'
        form.style.color = '#000'
      }}>
      <input
        name='name'
        placeholder='add a tag'
        type='text' />
      <input
        id='color-picker'
        type='color'
        name='color'
        defaultValue={styles.accent}
        oninput={e => {
          const form = document.getElementById('add-tag')
          form.style.background = e.target.value
          form.style.color = '#fff'
        }} />
      <label
        id='color-picker-btn'
        htmlFor='color-picker'>
        <Paint height='1rem' width='1rem' />
      </label>
      <button type='submit'>
        <Plus />
      </button>
    </form>
  </div>
)
