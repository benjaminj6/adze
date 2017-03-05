/* eslint-disable */
import { h } from 'hyperapp' // eslint-disable-line

// import Header from '../components/Header'
// import Prompt from '../components/Prompt'
// import Editor from '../components/Editor'
// import Dropdown from '../components/Dropdown'
//
// import { Menu, Edit, Info as InfoSvg } from '../components/Icons'
// import Button from '../components/Button'
// import Sidebar from '../components/Sidebar'
//
// import styles from '../../styles/foundation.json'
//
// const NoneSelected = model =>
//   <main>
//     <Header
//       left={<Menu />}
//       right={[
//         { content: 'Add +', title: 'New' }
//       ]} />
//     <Prompt />
//   </main>
//
// const PostSelected = model =>
//   <main>
//     <Header
//       left={<Menu />}
//       right={[
//         { content: <Edit />, title: 'Edit' },
//         {
//           content: <InfoSvg />,
//           title: 'Info',
//           menu: <Dropdown direction='right'>
//             <ul>
//               <li>Created: {model.selected.created || ''}</li>
//               <li>Last updated: {model.selected.updated || ''}</li>
//               <li>
//                 <span>Tags:</span>
//                 <ul>
//                   {model.selected.tags.map(t =>
//                     <li
//                       style={{ background: t.color || '#eee' }}
//                       className='tag'>
//                       {t.name}
//                       <Button className='remove-tag'>
//                         <InfoSvg />
//                       </Button>
//                     </li>)}
//                 </ul>
//                 <form id='new-tag' action=''>
//                   <input name='name' type='text' placeholder='New tag...' />
//                   <input name='color' type='color' value={styles.accent} />
//                   <button type='submit'><InfoSvg /></button>
//                 </form>
//               </li>
//             </ul>
//           </Dropdown>
//         },
//         {
//           content: 'Publish',
//           title: 'Publish',
//           className: 'btn-text'
//         }
//       ]} />
//     <Editor {...model} />
//   </main>
//
// export default model =>
//   <div id='app' className='dashboard-view'>
//     <Sidebar menu={model.menu} />
//     {
//       model.noneSelected ? <NoneSelected {...model} /> : <PostSelected {...model} />
//     }
//   </div>

export default model =>
  <div id='app' className='dashboard-view'>
    <nav style={{ background: 'steelblue', width: '40%' }}>
      <header>
        <button>
          @ email
        </button>
      </header>
      <section>{
        [
          { title: 'Posts', items: model.posts },
          { title: 'Tags', items: model.tags }
        ].map(i =>
          <ul>
            <h3>{i.title}</h3>
            {i.items.map(item => <li>{item.title}</li>)}
          </ul>
        )
      }</section>
    </nav>
    <main>
      <header>
        <button>@</button>
        <ul>
          {model.selected ? <div>buttons</div> : <div>new</div>}
        </ul>
      </header>
    </main>
  </div>
