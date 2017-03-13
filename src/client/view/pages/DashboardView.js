import { h } from 'hyperapp' // eslint-disable-line

import EditorView from '../components/EditorView'

import PostCard from '../components/PostCard'
import Sidebar from '../components/Sidebar'

const TagsView = ({ model, actions, tag }) => {
  const posts = model.posts.filter(p => {
    return p.tags.find(t => t._id === tag._id)
  })

  return (
    <main>
      <section className='tags-section' style={{
        padding: '3rem 5%'
      }}>
        <header>
          {/* TODO: Move this into 'input-header' component */}
          <input
            className='input-header'
            name='name'
            placeholder='tag name'
            value={tag ? tag.name : ''}
            type='text' />
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

const PromptView = ({ model, actions }) => (
  <main>
    <header />
    <section className='prompt'>
      <h2>
        You can select posts and categories on the left.
        <br />
        Or you can start a <a
          href='/dashboard/create'
          onclick={ev => {
            ev.preventDefault()
            actions.router.go('/dashboard/create')
          }}>new one today</a>.
      </h2>
    </section>
  </main>
)

export default (model, actions) => {
  return (
    <div id='app' className='dashboard-view'>
      <input
        hidden
        id='nav-toggler'
        type='checkbox' />
      <Sidebar model={model} actions={actions} />
      {
        /posts|create/.test(model.router.match)
        ? <EditorView model={model}
          actions={actions}
          selected={model.newContent} />
        : /tags/.test(window.location.pathname)
          ? <TagsView
            model={model}
            actions={actions}
            tag={
              model.tags.find(t => t._id === model.router.params.id)
            } />
          : <PromptView
            model={model}
            actions={actions} />
      }
    </div>
  )
}
