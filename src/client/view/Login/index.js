import { h } from 'hyperapp' // eslint-disable-line

export default (model, actions) => (
  <div
    id='app'
    className='login-view'
    oncreate={() => {
      console.log('Redirecting to login?', document.referrer === 'https://benjaminj6.github.io/adze/')
      if (document.referrer === 'https://benjaminj6.github.io/adze/') {
        login({
          email: 'test@test.com',
          password: 'test'
        }, actions)
      }
    }}>
    <form
      action='/api/auth/login'
      method='POST'
      onsubmit={ev => {
        ev.preventDefault()
        login({
          email: ev.target.querySelector('[name=email]').value,
          password: ev.target.querySelector('[name=password]').value
        }, actions)
      }}>
      <h2 style={{
        margin: '1rem 0'
      }}>{process.env.NAME}</h2>
      <input
        type='email'
        name='email'
        id='login-username'
        placeholder='email' />
      <input
        type='password'
        name='password'
        placeholder='password'
       />
      <button type='submit'>Log in</button>
      {
        process.env.DEMO
        ? <a
          href='/dashboard'
          onclick={ev => {
            ev.preventDefault()
            login({
              email: 'test@test.com',
              password: 'test'
            }, actions)
          }}>See the demo</a>
        : ''
      }
    </form>
  </div>
)

export function login (data = {}, actions) {
  window.fetch('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      email: data.email,
      password: data.password
    }),
    headers: new window.Headers({
      'Content-Type': 'application/json'
    }),
    credentials: 'include'
  }).then(res => {
    console.log(res)
    if (res.status !== 200) {
      throw new Error('Unauthorized')
    }

    actions.router.go('/dashboard')
  }).catch(err => {
    console.log('there was a fatal error')
    console.log(err)
  })
}
