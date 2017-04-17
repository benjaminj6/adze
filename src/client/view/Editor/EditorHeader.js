import { h } from 'hyperapp' // eslint-disable-line

import getHeaderButtons from './getHeaderButtons'
import HeaderButtons from '../components/HeaderButtons'
export default ({ model, actions, selected }) => {
  const buttons = getHeaderButtons(model, actions, selected)

  return (
    <header className='editor-header'>
      <HeaderButtons buttons={buttons} />
    </header>
  )
}
