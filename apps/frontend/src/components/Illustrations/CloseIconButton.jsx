import React from 'react'
import IconButton from './IconButton'

const CloseIconButton = props => (
  <IconButton id={props.id} hoverBgColor='#eceeef' style={{borderRadius: '16px', ...props.style}} width={(props.size || '32')} height={(props.size || '32')} onClick={props.onClick}>
    <svg viewBox='0 0 24 24' width={props.size || '32'} height={props.size || '32'} fill='currentColor' style={{top: 0, left: 0, pointerEvents: 'none'}}>
      <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
    </svg>
  </IconButton>
)

export default CloseIconButton
