import { h } from 'hyperapp' // eslint-disable-line

export default model => (
  <div id='app' class='not-found-view'>
    <section>
      <h1>404</h1>
      <h3>Not Found</h3>
      <p><span>{window.location.href}</span> could not be found. Please <a href='/'>log in</a> to view your content</p>
    </section>
  </div>
)
