import { h } from 'hyperapp' // eslint-disable-line
import styles from '../../styles/foundation.json'

export default props => (
  <li>
    <a
      style={{
        background: props.isActive ? '#fff' : '',
        color: props.isActive ? styles.accent : ''
      }}
      href={props.href}>
      {props.title}
    </a>
  </li>
)
