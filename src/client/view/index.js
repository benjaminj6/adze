import { h } from 'hyperapp' // eslint-disable-line

import Header from './Header'
import Sidebar from './Sidebar'
import Editor from './Editor'
import Prompt from './Prompt'
import LoginComponents from './Login'

import { Logo } from './Icons'
import styles from '../styles/foundation.json' // eslint-disable-line

const App = (props, children) => <div id='app' {...props}>{children}</div>

export const Test = model =>
  <App>
    <Sidebar menu={model.menu} />
    <main />
  </App>

export const LoginView = model =>
  <App>
    <Header
      left={<Logo />}
      style={{ background: styles.accent, color: styles.accent }} />
    <LoginComponents {...model} />
  </App>

export const Dashboard = model =>
  <div id='app'>
    <Sidebar menu={model.menu} />
    <main>
      <Header {...model.current} />
      {model.selected ? <Editor /> : <Prompt />}
    </main>
  </div>
