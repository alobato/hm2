import React from 'react'

const Drawing = props => {
  let height = 100
  let outlineColor = '#305479'
  if (props.height) height = props.height
  if (props.outlineColor) outlineColor = props.outlineColor

  let baseStyle = {display: 'inline-block', width: 'auto', height: `${height}px`, outlineWidth: '1px', outlineStyle: 'solid',  outlineColor: `${outlineColor}`, overflow: 'hidden', cursor: 'pointer', margin: '0.5rem'}
  if (props.selected) baseStyle['outlineWidth'] = '5px'
  return (
    <div style={baseStyle}>
      <img src={props.url} style={{height: '100%'}} onClick={props.onClick} alt='' />
    </div>
  )
}

export default Drawing
