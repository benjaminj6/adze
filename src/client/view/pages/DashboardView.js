/* eslint-disable */
import { h } from 'hyperapp' // eslint-disable-line

import Header from '../components/Header'
import Prompt from '../components/Prompt'
import Editor from '../components/Editor'
import Info from '../components/Info'
import { Menu, Edit, Info as InfoSvg } from '../components/Icons'
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
        { content: <InfoSvg />, title: 'Info' },
        {
          content: 'Publish',
          title: 'Publish',
          className: 'btn-text'
        }
      ]} />
    {model.info ? <Info /> : ''}
    <Editor {...model} />
  </main>

export default model =>
  <div id='app'>
    <Sidebar menu={model.menu} />
    {
      model.noneSelected ? <NoneSelected {...model} /> : <PostSelected {...model} />
    }
  </div>
