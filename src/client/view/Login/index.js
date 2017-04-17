import { h } from 'hyperapp' // eslint-disable-line

import login from './loginHandler'

const createLoginHandler = ({ email, password, actions }) => ev => {
  ev.preventDefault()

  login({
    email: email || ev.target.querySelector('[name=email]').value,
    password: password || ev.target.querySelector('[name=password]').value
  }, actions)
}

const createAutomaticLogin = ({ email, password, actions }) => () => {
  if (document.referrer === process.env.LANDING_PAGE) {
    login({ email, password }, actions)
  }
}

export default (model, actions) => (
  <div
    className='login-view'
    id='app'
    oncreate={createAutomaticLogin({ email: process.env.ADMIN_EMAIL, password: process.env.PASSWORD, actions })}>
    <form
      action='/api/auth/login'
      method='POST'
      onsubmit={createLoginHandler({ actions })}>
      <h2>{process.env.NAME}</h2>

      <input
        id='login-username'
        name='email'
        placeholder='email'
        type='email' />

      <input
        name='password'
        placeholder='password'
        type='password' />

      <button type='submit'>Log in</button>

      {
        // Create demo link if demo option enabled, otherwise nothing
        process.env.DEMO
          ? <a
            href='/dashboard'
            onclick={createLoginHandler({ email: process.env.ADMIN_EMAIL, password: process.env.PASSWORD, actions })}>
              See the demo
            </a>
          : ''
      }

    </form>
  </div>
)
