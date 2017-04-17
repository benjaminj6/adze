export default (data, actions) => {
  // TODO: replace fetch with a polyfill
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
    if (res.status !== 200) {
      throw new Error('Unauthorized')
    }

    actions.router.go('/dashboard')
  }).catch(err => {
    console.log('there was a fatal error')
    console.log(err)
  })
}
