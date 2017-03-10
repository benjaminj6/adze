import { h } from 'hyperapp' // eslint-disable-line

export default (model, actions) => (
  <div
    id='app'
    className='login-view'>
    <form
      action='/api/auth/login'
      method='POST'
      onsubmit={ev => {
        // TODO: break out into an action?
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

          actions.router.go('/dashboard')
        }).catch(err => {
          console.log('there was a fatal error')
          console.log(err)
        })
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
      <button type='submit'>Submit</button>
    </form>
  </div>
)
