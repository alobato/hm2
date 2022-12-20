import React, { Component } from 'react'

export default class Button extends Component {
  static defaultProps = {
    color: 'inherit',
    borderColor: null,
    bgColor: 'transparent',
    hoverBgColor: 'transparent',
    width: '32px',
    height: '32px',
  }

  handleTouch = e => {
    if (e.target.disabled) return
    if (e.target.classList.contains('hover'))
      e.target.classList.remove('hover')
    else
      e.target.classList.add('hover')
  }

  render() {
    const {id, onClick, children, loading, style, color, borderColor, bgColor, hoverBgColor, width, height, ...other} = this.props
    const border = borderColor ? `1px solid ${borderColor}` : 'none'

    const resetButtonStyle = {
      lineHeight: 0,
      margin: 0,
      padding: 0,
      border: 0,
      textTransform: 'none',
      overflow: 'visible',
      background: 'transparent',
      WebkitAppearance: 'button',
      cursor: 'pointer'
    }

    const baseStyle = {
      ...resetButtonStyle,
      position: 'relative',
      userSelect: 'none',
      outline: '0',
      border: border,
      backgroundColor: bgColor,
      color: color,
      width: `${width}px`,
      height: `${height}px`,
      ...style
    }

    return (
      <button {...other} id={id} onClick={onClick} style={{...baseStyle}} onTouchStart={this.handleTouch} onTouchEnd={this.handleTouch}>
        <style dangerouslySetInnerHTML={{__html: `.no-touch #${id}:hover,#${id}.hover{background-color:${hoverBgColor} !important} #${id}:disabled{cursor:not-allowed;opacity:0.65 !important}` }} />
        {children}
      </button>
    )

  }
}
