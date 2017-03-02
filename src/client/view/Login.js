import { h } from 'hyperapp' // eslint-disable-line

import { Info } from './Icons'

export default props =>
  <main id='login-view'>
    <div className='login'>
      <Info id='logo' />
      <form
        action=''
        id='login-form'>
        <input
          placeholder='Email'
          id='login-email'
          name='Email'
          type='email' />
        <input
          placeholder='Password'
          id='login-password'
          name='Password'
          type='password' />
        <button
          type='submit'>
          Log in
        </button>
      </form>
    </div>
  </main>
