import { h } from 'hyperapp' // eslint-disable-line

export default (props, children) => {
  const styles = {
    left: props.direction === 'left' ? 0 : 'auto',
    right: props.direction === 'right' ? 0 : 'auto'
  }

  return (
    <div
      className='dropdown-menu'
      style={styles}
      {...props}>
      {children}
    </div>
  )
}
