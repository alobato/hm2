import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import MouseDownOutside from './MouseDownOutside'

export default class Drag extends Component {

  static defaultProps = {
    rotate: 0,
    width: 100,
    height: 100,
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

    resizing: false,
    lastResizeX: NaN,
    lastResizeY: NaN,
    deltaResizeX: 0,
    deltaResizeY: 0,
    positionResizeX: 0,
    positionResizeY: 0,
    initialPositionResizeX: 0,
    initialPositionResizeY: 0,
    initialWidth: 0,
    initialHeight: 0,
    width: this.props.width,
    height: this.props.height,

    selected: false
  }

  tlMouseDown = e => {
    e.preventDefault()
    e.stopPropagation()
    if (typeof e.button === 'number' && e.button !== 0) return false
    this.setState({rotating: true})
    document.addEventListener('mousemove', this.handleRotate, true)
    document.addEventListener('mouseup', this.handleRotateStop, true)

  }

  brMouseDown = e => {
    e.preventDefault()
    e.stopPropagation()
    if (typeof e.button === 'number' && e.button !== 0) return false
    this.setState({resizing: true})
    document.addEventListener('mousemove', this.handleResize, true)
    document.addEventListener('mouseup', this.handleResizeStop, true)
  }


  mouseDown = e => {
    e.stopPropagation()
    e.preventDefault()
    if (typeof e.button === 'number' && e.button !== 0) return false
    this.setState(previousState => {
      if (previousState.selected) {
        return {dragging: true}
      } else {
        return {selected: true, dragging: true}
      }
    })
    // this.setState({dragging: true})
    // const {ownerDocument} = ReactDOM.findDOMNode(this)
    // ownerDocument.addEventListener('mousemove', this.handleDrag, true)
    document.addEventListener('mousemove', this.handleDrag, true)
    document.addEventListener('mouseup', this.handleDragStop, true)
  }

  mouseUp = e => {
    this.handleDragStop(e)
    this.handleRotateStop(e)
    this.handleResizeStop(e)
  }

  handleResize = e => {
    if (!this.state.resizing) return false

    const node = ReactDOM.findDOMNode(this)
    const offsetTop = node.offsetParent.getBoundingClientRect().top
    const offsetLeft = node.offsetParent.getBoundingClientRect().left
    let x = e.clientX - offsetLeft
    let y = e.clientY - offsetTop

    y = y - node.offsetParent.ownerDocument.body.scrollTop

    // if (x < 0) x = 0
    // if (y < 0) y = 0

    const isStart = !(typeof this.state.lastResizeX === 'number' && !isNaN(this.state.lastResizeX))

    let deltaX, deltaY, lastX, lastY, positionX, positionY

    if (isStart) {
      // If this is our first move, use the x and y as last coords.
      deltaX = 0
      deltaY = 0
      lastX = x
      lastY = y
      this.setState({initialWidth: this.state.width, initialHeight: this.state.height, initialPositionResizeX: this.state.positionResizeX, initialPositionResizeY: this.state.positionResizeY})
    } else {
      // Otherwise calculate proper values.
      deltaX = x - this.state.lastResizeX
      deltaY = y - this.state.lastResizeY
      lastX = this.state.lastResizeX
      lastY = this.state.lastResizeY
      positionX = this.state.initialPositionResizeX + deltaX
      positionY = this.state.initialPositionResizeY + deltaY
    }

    const dX = deltaX
    const dY = deltaY

    const w = this.state.initialWidth
    const h = this.state.initialHeight

    let nH, nW

    if (!(dX === 0 && dY === 0)) {
      if (dX > dY) {
        nH = h + dY
        nW = (w * nH) / h
      } else if (dX < dY) {
        nW = w + dX
        nH = (h * nW) / w
      }
      if ((nW && nW > 0) && (nH && nH > 0)) {
        this.setState({width: nW, height: nH})
      }
    }

    this.setState({
      lastResizeX: lastX,
      lastResizeY: lastY,
      deltaResizeX: deltaX,
      deltaResizeY: deltaY,
      positionResizeX: positionX,
      positionResizeY: positionY
    })
  }

  handleResizeStop = e => {
    console.log('handleResizeStop')
    // if (!this.state.resizing) return false
    this.setState((prevState) => {
      if (prevState.resizing) return {resizing: false, lastResizeX: NaN, lastResizeY: NaN}
    }, () => {
      document.removeEventListener('mousemove', this.handleResize)
      document.removeEventListener('mouseup', this.handleResizeStop)
      this.props.onChange({
        rotate: this.state.rotate,
        width: this.state.width,
        height: this.state.height,
        x: this.state.positionX,
        y: this.state.positionY
      })
    })
    // this.setState({resizing: false, lastResizeX: NaN, lastResizeY: NaN}, () => {
    //   document.removeEventListener('mousemove', this.handleResize)
    //   document.removeEventListener('mouseup', this.handleResizeStop)
    //   this.props.onChange({
    //     rotate: this.state.rotate,
    //     width: this.state.width,
    //     height: this.state.height,
    //     x: this.state.positionX,
    //     y: this.state.positionY
    //   })
    // })
  }

  handleRotate = e => {
    if (!this.state.rotating) return false

    const node = ReactDOM.findDOMNode(this)
    const offsetTop = node.offsetParent.getBoundingClientRect().top
    const offsetLeft = node.offsetParent.getBoundingClientRect().left
    let x = e.clientX - offsetLeft
    let y = e.clientY - offsetTop

    y = y - node.offsetParent.ownerDocument.body.scrollTop

    // if (x < 0) x = 0
    // if (y < 0) y = 0

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
    this.setState((prevState) => {
      if (prevState.rotating) return {rotating: false, lastRotateX: NaN, lastRotateY: NaN}
    }, () => {
      document.removeEventListener('mousemove', this.handleRotate)
      document.removeEventListener('mouseup', this.handleRotateStop)
      this.props.onChange({rotate: this.state.rotate, width: this.state.width, height: this.state.height, x: this.state.positionX, y: this.state.positionY})
    })

    // if (!this.state.rotating) return false

    // this.setState({rotating: false, lastRotateX: NaN, lastRotateY: NaN})

    // document.removeEventListener('mousemove', this.handleRotate)
    // document.removeEventListener('mouseup', this.handleRotateStop)

    // this.props.onChange({
    //   rotate: this.state.rotate,
    //   width: this.state.width,
    //   height: this.state.height,
    //   x: this.state.positionX,
    //   y: this.state.positionY
    // })
  }

  handleDrag = e => {
    console.log('handleDrag this.state.dragging', this.state.dragging)
    if (!this.state.dragging) return false

    const node = ReactDOM.findDOMNode(this)
    const offsetTop = node.offsetParent.getBoundingClientRect().top
    const offsetLeft = node.offsetParent.getBoundingClientRect().left
    let x = e.clientX - offsetLeft
    let y = e.clientY - offsetTop

    y = y - node.offsetParent.ownerDocument.body.scrollTop

    // if (x < 0) x = 0
    // if (y < 0) y = 0

    const isStart = !(typeof this.state.lastX === 'number' && !isNaN(this.state.lastX))

    console.log('isStart', isStart)

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
    // if (!this.state.dragging) return false

    this.setState((prevState) => {
      if (prevState.dragging) return {dragging: false, lastX: NaN, lastY: NaN}
    }, () => {
      document.removeEventListener('mousemove', this.handleDrag)
      document.removeEventListener('mouseup', this.handleDragStop)
      this.props.onChange({rotate: this.state.rotate, width: this.state.width, height: this.state.height, x: this.state.positionX, y: this.state.positionY})
    })

    // this.setState({dragging: false, lastX: NaN, lastY: NaN})

    // document.removeEventListener('mousemove', this.handleDrag)
    // document.removeEventListener('mouseup', this.handleDragStop)

    // this.props.onChange({
    //   rotate: this.state.rotate,
    //   width: this.state.width,
    //   height: this.state.height,
    //   x: this.state.positionX,
    //   y: this.state.positionY
    // })
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleDrag)
    document.removeEventListener('mouseup', this.handleDragStop)

    document.removeEventListener('mousemove', this.handleRotate)
    document.removeEventListener('mouseup', this.handleRotateStop)

    document.removeEventListener('mousemove', this.handleResize)
    document.removeEventListener('mouseup', this.handleResizeStop)
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
    const selectedStyle = this.state.selected ? {border: '1px dashed rgba(0, 0, 0, 0.3)'} : {}

    return (
      <MouseDownOutside onClickOutside={() => this.setState({selected: false})}>
      <div
        onMouseDown={this.mouseDown}
        onMouseUp={this.mouseUp}
        style={{
          left: 0,
          top: 0,
          width: `${this.state.width}px`,
          height: `${this.state.height}px`,
          userSelect: 'none',
          transform: `translate(${this.state.positionX}px, ${this.state.positionY}px) rotate(${this.state.rotate}deg)`,
          lineHeight: 0,
          zIndex: 1,
          position: 'absolute',
          ...selectedStyle
        }}
      >

        <div style={styleSquares}>
          <div ref='squareTopLeft'
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
            ref='squareBottomRight'
            style={{...baseSquareStyle,
              right: '-14px', bottom: '-14px',
              width: '12px',
              height: '12px'
            }}
            onMouseDown={this.brMouseDown}
          >
            <img alt='' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAACVBMVEUAAAAAAAD///+D3c/SAAAAAXRSTlMAQObYZgAAAClJREFUCNdjWLWAgWFqBBAngDCEPSuMg0Fh6jIGBtUwBgZOMIawuVYBABD9CcpP5goxAAAAAElFTkSuQmCC' />
          </div>
          <div
            style={{...baseSquareStyle,
              right: '-13px', top: '-20px',
              width: '13px',
              height: '14px',
              cursor: 'pointer'
            }}
            onClick={e => this.props.onRequestDelete(this.props.index)}
          >
            <img alt='' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOAgMAAACJEX5BAAAACVBMVEUAAAD///8AAABzxoNxAAAAAXRSTlMAQObYZgAAADNJREFUCNdjCA0NdWDIWrXKgSE1NMyBQWrVSgYGCQZOBgbJmTNxElAlbKuWMDAwhgYwAABlUA/57Dq34wAAAABJRU5ErkJggg==' />
          </div>
        </div>

        {this.props.children}
      </div>
      </MouseDownOutside>
    )
  }

}
