import React from 'react'

export default class RadioOrientation extends React.Component {

  render() {

    const hBackgroundColor = this.props.orientation === 'h' ? '#efefef' : '#fff'
    const vBackgroundColor = this.props.orientation === 'v' ? '#efefef' : '#fff'

    return (
      <div>
        <label style={{display: 'inline-block', width: '7rem', height: '2.25rem', padding: '0.5rem', textAlign: 'center', cursor: 'pointer', backgroundColor: hBackgroundColor}} htmlFor='horizontal'>
          Horizontal
          <input style={{display: 'none'}} id='horizontal' type='radio' onChange={this.props.onChange} value='h' name='orientation' checked={this.props.orientation === 'h'} />
        </label>
        <label style={{display: 'inline-block', width: '7rem', height: '2.25rem', padding: '0.5rem', textAlign: 'center', cursor: 'pointer', backgroundColor: vBackgroundColor}} htmlFor='vertical'>
          Vertical
          <input style={{display: 'none'}} id='vertical' type='radio' onChange={this.props.onChange} value='v' name='orientation' checked={this.props.orientation === 'v'} />
        </label>
      </div>
    )

  }
}
