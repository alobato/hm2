import React from 'react'

export default class RadioVerticalSide extends React.Component {

  render() {

    const lBackgroundColor = this.props.verticalSide === 'l' ? '#efefef' : '#fff'
    const rBackgroundColor = this.props.verticalSide === 'r' ? '#efefef' : '#fff'

    return (
      <div>
        <label style={{display: 'inline-block', width: '5rem', height: '2.25rem', padding: '0.5rem', cursor: 'pointer', backgroundColor: lBackgroundColor}} htmlFor='left'>
          <div style={{width: '30px', height: '20px', margin: '0 auto'}}>
            <svg viewBox="0 0 30 20" width="30" height="20"><g><path strokeWidth="2" fill="none" stroke='currentColor' d="m1,1l0,18l28,0l0,-18l-28,0z"></path><line strokeWidth="2" fill="none" stroke='currentColor' y2="18" x2="15" y1="2" x1="15"></line><line strokeWidth="2" fill="none" stroke='currentColor' y2="18" x2="22" y1="2" x1="22"></line><line strokeWidth="2" fill="none" stroke='currentColor' y2="7" x2="15" y1="7" x1="2"></line><line strokeWidth="2" fill="none" stroke='currentColor' y2="13" x2="15" y1="13" x1="2"></line></g></svg>
          </div>
          <input style={{display: 'none'}} id='left' type='radio' onChange={this.props.onChange} value='l' name='verticalSide' checked={this.props.verticalSide === 'l'} />
        </label>

        <label style={{display: 'inline-block', width: '5rem', height: '2.25rem', padding: '0.5rem', cursor: 'pointer', backgroundColor: rBackgroundColor}} htmlFor='right'>
          <div style={{width: '30px', height: '20px', margin: '0 auto'}}>
            <svg viewBox="0 0 30 20" width="30" height="20"><g><path strokeWidth="2" fill="none" stroke='currentColor' d="m1,1l0,18l28,0l0,-18l-28,0z"></path><line strokeWidth="2" fill="none" stroke='currentColor' y2="18" x2="7" y1="2" x1="7"></line><line strokeWidth="2" fill="none" stroke='currentColor' y2="18" x2="13" y1="2" x1="13"></line><line strokeWidth="2" fill="none" stroke='currentColor' y2="7" x2="30" y1="7" x1="13"></line><line strokeWidth="2" fill="none" stroke='currentColor' y2="13" x2="30" y1="13" x1="13"></line></g></svg>
          </div>
          <input style={{display: 'none'}} id='right' type='radio' onChange={this.props.onChange} value='r' name='verticalSide' checked={this.props.verticalSide === 'r'} />
        </label>
      </div>
    )

  }
}
