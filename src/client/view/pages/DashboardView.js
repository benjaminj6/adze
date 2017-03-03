/* eslint-disable */
import { h } from 'hyperapp' // eslint-disable-line

import Header from '../components/Header'
import Prompt from '../components/Prompt'
import Editor from '../components/Editor'
import { Menu, Edit, Info } from '../components/Icons'
import Sidebar from '../components/Sidebar'

const NoneSelected = model =>
  <main>
    <Header
      left={<Menu />}
      right={[
        { content: 'Add +', title: 'New' }
      ]} />
    <Prompt />
  </main>

const PostSelected = model =>
  <main>
    <Header
      left={<Menu />}
      right={[
        { content: <Edit />, title: 'Edit' },
        { content: <Info />, title: 'Info' },
        {
          content: 'Publish',
          title: 'More',
          className: 'btn-text'
        }
      ]} />
    <Editor {...model} />
  </main>

export default model =>
  <div id='app'>
    <Sidebar menu={model.menu} />
    {
      model.noneSelected ? <NoneSelected {...model} /> : <PostSelected {...model} />
    }
  </div>
