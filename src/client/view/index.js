import { h } from 'hyperapp' // eslint-disable-line

import Header from './Header'
import Sidebar from './Sidebar'
import Editor from './Editor'
import LoginComponents from './Login'

const App = (props, children) => <div id='app'>{children}</div>

export const Test = model =>
  <App>
    <Sidebar menu={model.menu} />
    <main />
  </App>

export const Login = model =>
  <App>
    <LoginComponents {...model} />
  </App>

export const Dashboard = model =>
  <div id='app'>
    <Sidebar menu={model.menu} />
    <main>
      <Header {...model} />
      <Editor />
    </main>
  </div>
