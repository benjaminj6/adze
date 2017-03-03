/* eslint-disable */
import { h } from 'hyperapp' // eslint-disable-line

import { Logo } from './Icons'

export default props =>
  <main id='login'>
    <div className='message'>
      <h1>Welcome back.</h1>
      <h4>Let's get you signed in so you can make something awesome</h4>
    </div>
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
        className='btn-accent'
        type='submit'>
        Log in
      </button>
    </form>
  </main>
