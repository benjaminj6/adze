import { h } from 'hyperapp' // eslint-disable-line

export default (model, actions) => (
  <div id='app'>
    <form action='/api/auth/login' method='POST' onsubmit={ev => {
      console.log(ev)
      ev.preventDefault()
      window.fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email: 'test@test.com',
          password: 'test'
        }),
        headers: new window.Headers({
          'Content-Type': 'application/json'
        })
      }).then(res => {
        console.log(res)
        if (res.status !== 200) {
          throw new Error('Unauthorized')
        }
      }).catch(err => {
        console.log('there was a fatal error')
        console.log(err)
      })
    }}>
      <input type='email' name='email' id='login-username' />
      <input type='password' name='password' />
      <button type='submit'>Submit</button>
    </form>
  </div>
)
