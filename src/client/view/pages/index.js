/* eslint-disable */

import { h } from 'hyperapp' // eslint-disable-line

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Editor from '../components/Editor'
import Prompt from '../components/Prompt'
import LoginComponents from '../components/Login'

import { Logo, Menu } from '../components/Icons'
import styles from '../../styles/foundation.json' // eslint-disable-line

import DashboardView from './DashboardView.js'

const App = (props, children) => <div id='app' {...props}>{children}</div>

export const Test = model =>
  <App className='test-view'>
    <Sidebar menu={model.menu} />
    <main />
  </App>

export const LoginView = model =>
  <App className='login-view'>
    <Header
      left={<Logo />} />
    <LoginComponents {...model} />
  </App>

export { default as DashboardView } from './DashboardView'
