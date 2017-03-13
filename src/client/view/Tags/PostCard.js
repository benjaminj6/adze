import { h } from 'hyperapp' // eslint-disable-line

export default ({ post, actions }) => (
  <li className='post-card'>
    <a
      href={`/dashboard/posts/id=${post._id}`}
      onclick={ev => {
        ev.preventDefault()
        actions.selectPost(post._id)
        actions.router.go(`/dashboard/posts/id=${post._id}`)
      }}>
      <h4>{post.title}</h4>
      <h6>({new Date(post.date).toDateString()})</h6>
    </a>
  </li>
)
