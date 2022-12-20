import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MouseDownOutside from './MouseDownOutside'

export default class DragText extends Component {

  static defaultProps = {
    rotate: 0,
    positionX: 0,
    positionY: 0,
    onChange: function(){}
  }

  state = {
    dragging: false,
    lastX: NaN,
    lastY: NaN,
    deltaX: 0,
    deltaY: 0,
    positionX: this.props.positionX,
    positionY: this.props.positionY,
    initialPositionX: 0,
    initialPositionY: 0,

    rotating: false,
    lastRotateX: NaN,
    lastRotateY: NaN,
    deltaRotateX: 0,
    deltaRotateY: 0,
    positionRotateX: 0,
    positionRotateY: 0,
    initialPositionRotateX: 0,
    initialPositionRotateY: 0,
    initialRotate: 0,
    rotate: this.props.rotate,

    selected: false
  }

  handleDrag = e => {
    if (!this.state.dragging) return false

    const node = ReactDOM.findDOMNode(this)
    const offsetTop = node.offsetParent.getBoundingClientRect().top
    const offsetLeft = node.offsetParent.getBoundingClientRect().left
    let x = e.clientX - offsetLeft
    let y = e.clientY - offsetTop

    y = y - node.offsetParent.ownerDocument.body.scrollTop

    const isStart = !(typeof this.state.lastX === 'number' && !isNaN(this.state.lastX))

    let deltaX, deltaY, lastX, lastY, positionX, positionY

    if (isStart) {
      // If this is our first move, use the x and y as last coords.
      deltaX = 0
      deltaY = 0
      lastX = x
      lastY = y
      this.setState({initialPositionX: this.state.positionX, initialPositionY: this.state.positionY})
    } else {
      // Otherwise calculate proper values.
      deltaX = x - this.state.lastX
      deltaY = y - this.state.lastY
      lastX = this.state.lastX
      lastY = this.state.lastY
      positionX = this.state.initialPositionX + deltaX
      positionY = this.state.initialPositionY + deltaY
    }

    this.setState({
      lastX: lastX,
      lastY: lastY,
      deltaX: deltaX,
      deltaY: deltaY,
      positionX: positionX,
      positionY: positionY
    })
  }

  handleDragStop = e => {
    if (!this.state.dragging) return false

    this.setState({dragging: false, lastX: NaN, lastY: NaN})

    document.removeEventListener('mousemove', this.handleDrag)
    document.removeEventListener('mouseup', this.handleDragStop)

    this.props.onChange({
      rotate: this.state.rotate,
      x: this.state.positionX,
      y: this.state.positionY
    })
  }

  handleRotate = e => {
    if (!this.state.rotating) return false

    const node = ReactDOM.findDOMNode(this)
    const offsetTop = node.offsetParent.getBoundingClientRect().top
    const offsetLeft = node.offsetParent.getBoundingClientRect().left
    let x = e.clientX - offsetLeft
    let y = e.clientY - offsetTop

    y = y - node.offsetParent.ownerDocument.body.scrollTop

    const isStart = !(typeof this.state.lastRotateX === 'number' && !isNaN(this.state.lastRotateX))

    let deltaX, deltaY, lastX, lastY, positionX, positionY

    if (isStart) {
      // If this is our first move, use the x and y as last coords.
      deltaX = 0
      deltaY = 0
      lastX = x
      lastY = y
      this.setState({initialRotate: this.state.rotate, initialPositionRotateX: this.state.positionRotateX, initialPositionRotateY: this.state.positionRotateY})
    } else {
      // Otherwise calculate proper values.
      deltaX = x - this.state.lastRotateX
      deltaY = y - this.state.lastRotateY
      lastX = this.state.lastRotateX
      lastY = this.state.lastRotateY
      positionX = this.state.initialPositionRotateX + deltaX
      positionY = this.state.initialPositionRotateY + deltaY
    }

    let dX = deltaX
    let dY = deltaY
    let deg = this.state.initialRotate

    if (!(dX === 0 && dY === 0)) {
      if (dX >= dY) {
        deg += dX
        if (deg > 180) deg = 180
        if (deg < -180) deg = -180
      } else {
        deg += -dY
        if (deg > 180) deg = 180
        if (deg < -180) deg = -180
      }
    }

    this.setState({
      lastRotateX: lastX,
      lastRotateY: lastY,
      deltaRotateX: deltaX,
      deltaRotateY: deltaY,
      positionRotateX: positionX,
      positionRotateY: positionY,
      rotate: deg
    })
  }

  handleRotateStop = e => {
    if (!this.state.rotating) return false

    this.setState({rotating: false, lastRotateX: NaN, lastRotateY: NaN})

    document.removeEventListener('mousemove', this.handleRotate)
    document.removeEventListener('mouseup', this.handleRotateStop)

    this.props.onChange({
      rotate: this.state.rotate,
      width: this.state.width,
      height: this.state.height,
      x: this.state.positionX,
      y: this.state.positionY
    })
  }

  mouseDown = e => {
    // if (typeof e.button === 'number' && e.button === 2) {
    //   e.preventDefault()
    //   return this.props.onMouse2Down(e)
    // }

    if (typeof e.button === 'number' && e.button !== 0) return false

    this.setState(previousState => {
      if (!previousState.selected) {
        return {selected: true}
      }
    })

    // this.setState({dragging: true})

    // const {ownerDocument} = ReactDOM.findDOMNode(this)
    // ownerDocument.addEventListener('mousemove', this.handleDrag, true)
    // document.addEventListener('mouseup', this.handleDragStop, true)
  }

  mouseUp = e => {
    this.handleDragStop(e)
    this.handleRotateStop(e)
  }

  tlMouseDown = e => {
    if (typeof e.button === 'number' && e.button !== 0) return false

    this.setState({rotating: true, dragging: false})

    e.stopPropagation()
    e.preventDefault()

    document.addEventListener('mousemove', this.handleRotate, true)
    document.addEventListener('mouseup', this.handleRotateStop, true)

  }

  brMouseDown = e => {
    if (typeof e.button === 'number' && e.button !== 0) return false

    this.setState({rotating: false, dragging: true})

    e.stopPropagation()
    e.preventDefault()

    document.addEventListener('mousemove', this.handleDrag, true)
    document.addEventListener('mouseup', this.handleDragStop, true)
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleDrag)
    document.removeEventListener('mouseup', this.handleDragStop)

    document.removeEventListener('mousemove', this.handleRotate)
    document.removeEventListener('mouseup', this.handleRotateStop)
  }

  render() {

    const baseSquareStyle = {
      position: 'absolute',
      width: '7px',
      height: '7px',
      userSelect: 'none',
      zIndex: 1000,
    }
    // const styleSquares = this.props.selected ? {display: 'block'} : {display: 'none'}
    const styleSquares = this.state.selected ? {display: 'block'} : {display: 'none'}

    return (
      <MouseDownOutside onClickOutside={() => this.setState({selected: false})}>
        <div
          onMouseDown={this.mouseDown}
          onMouseUp={this.mouseUp}
          style={{
            left: 0,
            top: 0,
            userSelect: 'none',
            transform: `translate(${this.state.positionX}px, ${this.state.positionY}px) rotate(${this.state.rotate}deg)`,
            lineHeight: 0,
            zIndex: 1,
            position: 'absolute',
            display: 'inline-block'
          }}
        >
          <div style={styleSquares}>
            <div
              style={{...baseSquareStyle,
                top: '-14px', left: '-14px',
                width: '14px',
                height: '12px'
              }}
              onMouseDown={this.tlMouseDown}
            >
              <img alt='' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMAgMAAAAv7mRJAAAACVBMVEUAAAD///8AAABzxoNxAAAAAXRSTlMAQObYZgAAADRJREFUCNdjYGQAAjYHEQYGSYZMBoYUxlUODClsqyYAWZFAFlAUiZAMTWFgAEkyMIY6MAAA978I7tjq7eEAAAAASUVORK5CYII=' />
            </div>
            <div
              style={{...baseSquareStyle,
                right: '-18px', bottom: '-18px',
                width: '18px',
                height: '18px'
              }}
              onMouseDown={this.brMouseDown}
            >
              <img alt='' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASAgMAAAAroGbEAAAACVBMVEUAAAAAAAD///+D3c/SAAAAAXRSTlMAQObYZgAAAERJREFUCNdjYGBYwAAETBEgkjMMRKqGNgBJrlUgYQYGDqBwY4gaULh1qWoDw9Q2TtUECAkRActCVIJ1IUzgDIOZDLEFAEDhD2Vnp2RVAAAAAElFTkSuQmCC' />
            </div>
            <div
              style={{...baseSquareStyle,
                right: '-13px', top: '-20px',
                width: '13px',
                height: '14px',
                cursor: 'pointer'
              }}
              onClick={e => this.props.onRequestDelete(e)}
            >
              <img alt='' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOAgMAAACJEX5BAAAACVBMVEUAAAD///8AAABzxoNxAAAAAXRSTlMAQObYZgAAADNJREFUCNdjCA0NdWDIWrXKgSE1NMyBQWrVSgYGCQZOBgbJmTNxElAlbKuWMDAwhgYwAABlUA/57Dq34wAAAABJRU5ErkJggg==' />
            </div>
          </div>

          <span onClick={() => document.execCommand('selectAll', false, null)} suppressContentEditableWarning contentEditable={true} style={{ color: 'white', backgroundColor: '#4d4d4d', padding: '4px', fontSize: '12px', lineHeight: '10px', fontFamily: 'Arial' }}>digite aqui</span>
        </div>
      </MouseDownOutside>
    )
  }
}
