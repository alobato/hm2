import React from 'react'
import IconButton from './IconButton'

const PictureIconButton = props => (
  <IconButton id={props.id} hoverBgColor='#eceeef' style={{borderRadius: '16px', width: (props.size || '32'), height: (props.size || '32'), ...props.style}} onClick={props.onClick}>
    <svg viewBox='0 0 32 32' width={(props.size - 6) || '32'} height={(props.size - 6) || '32'} fill='currentColor' style={{top: 0, left: 0}}>
      <path d='M0 4 L0 28 L32 28 L32 4 z M4 24 L10 10 L15 18 L18 14 L24 24z M25 7 A4 4 0 0 1 25 15 A4 4 0 0 1 25 7'></path>
    </svg>
  </IconButton>
)

export default PictureIconButton
