export default (model, data, actions) => {
  // TODO: swap `fetch` for a polyfill
  window.fetch('/api/auth/logout')
  .then(res => actions.router.go('/'))
}
