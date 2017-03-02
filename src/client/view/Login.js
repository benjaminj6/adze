import { h } from 'hyperapp' // eslint-disable-line

import { Logo } from './Icons'

export default props =>
  <main id='login-view'>
    <div className='login'>
      <Logo id='logo' />
      <form
        action=''
        id='login-form'>
        <h4>Sign in to {process.env.NAME}</h4>
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
          className='btn-accent'
          type='submit'>
          Log in
        </button>
      </form>
    </div>
  </main>
