import { h } from 'hyperapp' // eslint-disable-line

import getHeaderButtons from './getHeaderButtons'

export default ({ model, actions, selected }) => {
  const buttons = getHeaderButtons(model, actions, selected)

  return (
    <header>
      <ul>
        {buttons.map(b => <li>{b}</li>)}
      </ul>
    </header>
  )
}
