import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CheckBox extends Component {

  static propTypes = {
    onChange: PropTypes.func
  }

  static defaultProps = {
    onChange: () => {},
    name: null,
    circleColor: 'hsla(217, 89%, 61%, 1)',
    ballColor: 'hsla(217, 89%, 61%, 1)',
    disabled: false,
    fontSize: '14px',
    borderWidth: 2,
    circleStyle: {},
    size: '20px'
  }

  handleClick = e => {
    this.props.onChange({target: {name: this.props.name, checked: !this.props.checked, value: this.props.value}})
  }

  render() {
    return [
<style key='RadioButton0' dangerouslySetInnerHTML={{__html: `
.RadioButton .ball {
  -webkit-transform: translateX(-50%) translateY(-50%) scale(0);
  transform: translateX(-50%) translateY(-50%) scale(0);
}
.RadioButton[aria-checked="true"] .ball {
  -webkit-transform: translateX(-50%) translateY(-50%) scale(1);
  transform: translateX(-50%) translateY(-50%) scale(1);
}
`}} />,
      <div key='RadioButton1' className='RadioButton' aria-checked={this.props.checked} onClick={this.handleClick} style={{display: 'inline-block', cursor: 'pointer', width: `${this.props.size}`, height: `${this.props.size}`, ...this.props.style}}>
        <div style={{position: 'relative', width: '100%', height: '100%', borderRadius: '2px', border: `${this.props.borderWidth}px solid ${this.props.circleColor}`, ...this.props.circleStyle}}>
          <div className='ball' style={{position: 'absolute', top: '50%', left: '50%', border: `5px solid ${this.props.ballColor}`}}></div>
        </div>
      </div>,
      <label key='RadioButton2' style={{lineHeight: '20px', fontSize: this.props.fontSize, paddingLeft: '8px', cursor: 'pointer', userSelect: 'none'}} onClick={this.handleClick}>{this.props.label}</label>
    ]
  }
}
