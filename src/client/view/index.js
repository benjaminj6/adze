import { h } from 'hyperapp' // eslint-disable-line

import Header from './Header'
import Sidebar from './Sidebar'
import Editor from './Editor'

export default model =>
  <div id='app'>
    <Sidebar menu={model.menu} />
    <main>
      <Header />
      <Editor />
    </main>
  </div>
