import { h } from 'hyperapp' //eslint-disable-line

const Svg = (props, children) => {
  if (props === null) { props = {} }

  return (<svg
    fill={props.fill || '#000'}
    height={props.size || 24}
    width={props.size || 24}
    viewBox='0 0 24 24'
    {...props}>
    {children}
  </svg>)
}

export const AngleDown = props =>
  <Svg {...props}>
    <path d='M7 10l5 5 5-5z' />
    <path d='M0 0h24v24H0z' fill='none' />
  </Svg>

export const Calendar = props =>
  <Svg {...props}>
    <path d='M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z' />
    <path d='M0 0h24v24H0z' fill='none' />
  </Svg>

export const Check = props => (
  <i className='check'>
    <Svg {...props}>
      <path
        fill={props.color || '#000'}
        d='M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' />
      <path
        fill={props.innerColor || '#fff'}
        d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
    </Svg>
  </i>
)

export const Close = props =>
  <Svg {...props}>
    <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
    <path d='M0 0h24v24H0z' fill='none' />
  </Svg>

export const FileMultiple = props => (
  <Svg {...props}>
    <path d='M15,7H20.5L15,1.5V7M8,0H16L22,6V18A2,2 0 0,1 20,20H8C6.89,20 6,19.1 6,18V2A2,2 0 0,1 8,0M4,4V22H20V24H4A2,2 0 0,1 2,22V4H4Z' />
  </Svg>
)

export const FilePlus = props => (
  <Svg {...props}>
    <path d='M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M11,15V12H9V15H6V17H9V20H11V17H14V15H11Z' />
  </Svg>
)

export const Logo = props =>
  <Svg {...props}>
    <g><path d='M13.618 6.166c.237-.329.382-.729.382-1.166 0-1.102-.897-2-2-2-1.104 0-2 .898-2 2 0 .437.144.837.381 1.166-1.854.383-3.472 1.41-4.616 2.834h12.47c-1.145-1.424-2.763-2.451-4.617-2.834zm-1.618-.166c-.552 0-1-.447-1-1 0-.551.448-1 1-1 .551 0 1 .449 1 1 0 .553-.449 1-1 1zM20.5 9.5c-.751 0-2 .5-2 .5h-13.418c-.598 1.029-.969 2.201-1.055 3.453-1.153-.222-2.027-1.236-2.027-2.453v-1.5c0-.826-.673-1.5-1.5-1.5-.276 0-.5.225-.5.5 0 .276.224.5.5.5.275 0 .5.225.5.5v1.5c0 1.767 1.316 3.228 3.019 3.463.09 1.572.633 3.063 1.593 4.338.094.126.242.199.399.199h11.979c.157 0 .306-.073.399-.199.558-.741.971-1.556 1.241-2.415.283.073.573.114.869.114 1.93 0 3.5-1.568 3.5-3.5.001-1.93-1.569-3.5-3.499-3.5zm0 6c-.215 0-.424-.035-.629-.09.083-.462.129-.932.129-1.41 0-1.139-.244-2.222-.675-3.203.359-.194.759-.297 1.175-.297 1.378 0 2.5 1.122 2.5 2.5 0 1.379-1.122 2.5-2.5 2.5z' /></g>
  </Svg>

export const Menu = props =>
  <Svg {...props}>
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' />
  </Svg>

export const More = props =>
  <Svg {...props}>
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z' />
  </Svg>

export const Paint = props =>
  <Svg {...props}>
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M16.56 8.94L7.62 0 6.21 1.41l2.38 2.38-5.15 5.15c-.59.59-.59 1.54 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21 14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5z' />
    <path class='bar' d='M0 20h24v4H0z' />
  </Svg>

export const Plus = props =>
  <Svg {...props}>
    <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' />
    <path d='M0 0h24v24H0z' fill='none' />
  </Svg>

export const Save = props =>
  <Svg {...props}>
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z' />
  </Svg>

export const SaveCheck = props => {
  const innerSize = props ? props.size * 0.75 : 16
  return (
    <i
      className='save-check'
      style={{
        position: 'relative'
      }}>
      <Save {...props} />
      <Check
        size={innerSize}
        color='#fff'
        innerColor='#0a0'
        style={{
          position: 'absolute',
          bottom: `-${props ? props.size / 4 : 6}px`,
          right: 0
        }}
      />
    </i>
  )
}

export const Tag = props =>
  <Svg {...props}>
    <path d='M5.5,7A1.5,1.5 0 0,0 7,5.5A1.5,1.5 0 0,0 5.5,4A1.5,1.5 0 0,0 4,5.5A1.5,1.5 0 0,0 5.5,7M21.41,11.58C21.77,11.94 22,12.44 22,13C22,13.55 21.78,14.05 21.41,14.41L14.41,21.41C14.05,21.77 13.55,22 13,22C12.45,22 11.95,21.77 11.58,21.41L2.59,12.41C2.22,12.05 2,11.55 2,11V4C2,2.89 2.89,2 4,2H11C11.55,2 12.05,2.22 12.41,2.58L21.41,11.58M13,20L20,13L11.5,4.5L4.5,11.5L13,20Z' />
  </Svg>

export const Trash = props =>
  <Svg {...props}>
    <path d='M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z' />
    <path d='M0 0h24v24H0z' fill='none' />
  </Svg>

export const User = props =>
  <Svg {...props}>
    <path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z' />
    <path d='M0 0h24v24H0z' fill='none' />
  </Svg>
