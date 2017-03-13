import { h } from 'hyperapp' // eslint-disable-line

import PostCard from './PostCard'
import InputHeader from './InputHeader'

export default ({ model, actions, tag }) => {
  const posts = model.posts.filter(p => {
    return p.tags.find(t => t._id === tag._id)
  })

  return (
    <main>
      {/* TODO: move into .scss */}
      <section className='tags-section' style={{
        padding: '3rem 5%'
      }}>
        <header>
          <InputHeader
            className='tag-header'
            name='name'
            placeholder='tag name'
            value={tag ? tag.name : ''} />
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
