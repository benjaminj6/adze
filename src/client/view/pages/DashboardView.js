import { h } from 'hyperapp' // eslint-disable-line

import Header from '../components/Header'
import Prompt from '../components/Prompt'
import Editor from '../components/Editor'
import Dropdown from '../components/Dropdown'

import { Menu, Edit, Info as InfoSvg } from '../components/Icons'
import Sidebar from '../components/Sidebar'

import styles from '../../styles/foundation.json'

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
        {
          content: <InfoSvg />,
          title: 'Info',
          style: {
            border: '1px solid rgba(0, 0, 0, 0.1)',
            borderBottom: 'none',
            borderRadius: 0,
            height: styles.base + 1
          },
          menu: <Dropdown direction='right'>
            <ul>
              <li>Created on: {model.selected.created || ''}</li>
              <li>Updated on: {model.selected.updated || ''}</li>
              <li>
                <span>Tags:</span>
                <ul>
                  {model.selected.tags.map(t =>
                    <li
                      style={{
                        background: t.color || '#eee'
                      }}
                      className='tag'>
                      {t.name}
                    </li>)}
                </ul>
                <form id='new-tag' action=''>
                  <input name='name' type='text' placeholder='New tag...' />
                  <input name='color' type='color' value={styles.accent} />
                  <button type='submit'><InfoSvg /></button>
                </form>
              </li>
            </ul>
          </Dropdown>
        },
        {
          content: 'Publish',
          title: 'Publish',
          className: 'btn-text'
        }
      ]} />
    <Editor {...model} />
  </main>

export default model =>
  <div id='app' className='dashboard-view'>
    <Sidebar menu={model.menu} />
    {
      model.noneSelected ? <NoneSelected {...model} /> : <PostSelected {...model} />
    }
  </div>
