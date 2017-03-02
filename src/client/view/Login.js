import { h } from 'hyperapp' // eslint-disable-line

import { Ex } from './Icons'

export default props =>
  <main className='login-main'>
    <Ex />
    <form
      action=''
      id='login'>
      {process.env.DEMO ? 'foo' : 'bar'}
    </form>
  </main>
