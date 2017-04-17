import { h } from 'hyperapp' // eslint-disable-line

export default ({ model, actions }) => {
  const linkClickHandler = ev => {
    ev.preventDefault()
    actions.router.go('/dashboard/create')
  }

  const LinkToCreate = children => (
    <a
      href='/dashboard/create'
      onclick={linkClickHandler}>{children}</a>
  )

  return (
    <main>
      <section className='prompt'>
        <h2>
          You can select posts and categories on the left.
          <br />
          Or you can start a <LinkToCreate>new one today</LinkToCreate>.
        </h2>
      </section>
    </main>
  )
}
