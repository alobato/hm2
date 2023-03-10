import React, { Component }  from 'react'
import PropTypes from 'prop-types'
import { findDOMNode } from 'react-dom'

import Pane from './Pane'
import Resizer, { RESIZER_DEFAULT_CLASSNAME } from './Resizer'

function unFocus(document, window) {
  if (document.selection) {
    document.selection.empty()
  } else {
    try {
      window.getSelection().removeAllRanges()
      // eslint-disable-next-line no-empty
    } catch (e) {}
  }
}

export default class SplitPane extends Component {
  static defaultProps = {
    allowResize: true,
    minSize: 50,
    primary: 'first',
    split: 'vertical',
    paneClassName: '',
    pane1ClassName: '',
    pane2ClassName: '',
  }

  static propTypes = {
    allowResize: PropTypes.bool,
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
    className: PropTypes.string,
    primary: PropTypes.oneOf(['first', 'second']),
    minSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    maxSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // eslint-disable-next-line react/no-unused-prop-types
    defaultSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    split: PropTypes.oneOf(['vertical', 'horizontal']),
    onDragStarted: PropTypes.func,
    onDragFinished: PropTypes.func,
    onChange: PropTypes.func,
    onResizerClick: PropTypes.func,
    onResizerDoubleClick: PropTypes.func,
    style: PropTypes.object,
    resizerStyle: PropTypes.object,
    paneClassName: PropTypes.string,
    pane1ClassName: PropTypes.string,
    pane2ClassName: PropTypes.string,
    paneStyle: PropTypes.object,
    pane1Style: PropTypes.object,
    pane2Style: PropTypes.object,
    resizerClassName: PropTypes.string,
    step: PropTypes.number
  }

  state = {
    active: false,
    resized: false,
  }

  onMouseDown = e => {
    const eventWithTouches = Object.assign({}, e, {touches: [{ clientX: e.clientX, clientY: e.clientY }]})
    this.onTouchStart(eventWithTouches)
  }

  onTouchStart = e => {
    const { allowResize, onDragStarted, split } = this.props
    if (allowResize) {
      unFocus(document, window)
      const position = split === 'vertical' ? e.touches[0].clientX : e.touches[0].clientY

      if (typeof onDragStarted === 'function') {
        onDragStarted()
      }
      this.setState({active: true, position})
    }
  }

  onMouseMove = e => {
    const eventWithTouches = Object.assign({}, e, {touches: [{ clientX: e.clientX, clientY: e.clientY }]})
    this.onTouchMove(eventWithTouches)
  }

  onTouchMove = e => {
    const { allowResize, maxSize, minSize, onChange, split, step } = this.props
    const { active, position } = this.state
    if (allowResize && active) {
      unFocus(document, window)
      const isPrimaryFirst = this.props.primary === 'first'
      const ref = isPrimaryFirst ? this.pane1 : this.pane2
      const ref2 = isPrimaryFirst ? this.pane2 : this.pane1
      if (ref) {
        const node = findDOMNode(ref)
        const node2 = findDOMNode(ref2)

        if (node.getBoundingClientRect) {
          const width = node.getBoundingClientRect().width
          const height = node.getBoundingClientRect().height
          const current = split === 'vertical' ? e.touches[0].clientX : e.touches[0].clientY
          const size = split === 'vertical' ? width : height
          let positionDelta = position - current
          if (step) {
            if (Math.abs(positionDelta) < step) {
              return
            }
            // Integer division
            // eslint-disable-next-line no-bitwise
            positionDelta = ~~(positionDelta / step) * step
          }
          let sizeDelta = isPrimaryFirst ? positionDelta : -positionDelta

          const pane1Order = parseInt(window.getComputedStyle(node).order, 10)
          const pane2Order = parseInt(window.getComputedStyle(node2).order, 10)
          if (pane1Order > pane2Order) {
              sizeDelta = -sizeDelta
          }

          let newMaxSize = maxSize
          if (maxSize !== undefined && maxSize <= 0) {
            const splPane = this.splitPane
            if (split === 'vertical') {
              newMaxSize = splPane.getBoundingClientRect().width + maxSize
            } else {
              newMaxSize = splPane.getBoundingClientRect().height + maxSize
            }
          }

          let newSize = size - sizeDelta
          const newPosition = position - positionDelta

          if (newSize < minSize) {
            newSize = minSize
          } else if (maxSize !== undefined && newSize > newMaxSize) {
            newSize = newMaxSize
          } else {
            this.setState({position: newPosition, resized: true})
          }

          if (onChange) onChange(newSize)
          this.setState({ draggedSize: newSize })
          ref.setState({ size: newSize })
        }
      }
    }
  }

  onMouseUp = () => {
    const { allowResize, onDragFinished } = this.props
    const { active, draggedSize } = this.state
    if (allowResize && active) {
      if (typeof onDragFinished === 'function') {
        onDragFinished(draggedSize)
      }
      this.setState({ active: false })
    }
  }

  setSize(props, state) {
    const isPrimaryFirst = props.primary === 'first'
    const ref = isPrimaryFirst ? this.pane1 : this.pane2
    const ref2 = isPrimaryFirst ? this.pane2 : this.pane1
    let newSize
    if (ref) {
      newSize = props.size || (state && state.draggedSize) || props.defaultSize || props.minSize
      ref.setState({size: newSize})
      if (props.size !== state.draggedSize) {
        this.setState({draggedSize: newSize})
      }
    }
    if (ref2 && props.primary !== this.props.primary) {
      ref2.setState({size: undefined})
    }
  }

  componentDidMount() {
    this.setSize(this.props, this.state)
    document.addEventListener('mouseup', this.onMouseUp)
    document.addEventListener('mousemove', this.onMouseMove)
    document.addEventListener('touchmove', this.onTouchMove)
  }

  componentWillReceiveProps(props) {
    this.setSize(props, this.state)
  }

  componentWillUnmount() {
    document.removeEventListener('mouseup', this.onMouseUp)
    document.removeEventListener('mousemove', this.onMouseMove)
    document.removeEventListener('touchmove', this.onTouchMove)
  }

  render() {
    const {
      allowResize,
      children,
      className,
      defaultSize,
      minSize,
      onResizerClick,
      onResizerDoubleClick,
      paneClassName,
      pane1ClassName,
      pane2ClassName,
      paneStyle,
      pane1Style: pane1StyleProps,
      pane2Style: pane2StyleProps,
      primary,
      resizerClassName,
      resizerStyle,
      size,
      split,
      style: styleProps,
    } = this.props
    const disabledClass = allowResize ? '' : 'disabled'
    const resizerClassNamesIncludingDefault = resizerClassName ? `${resizerClassName} ${RESIZER_DEFAULT_CLASSNAME}` : resizerClassName

    const style = Object.assign(
      {},
      {
        display: 'flex',
        flex: 1,
        height: '100%',
        position: 'absolute',
        outline: 'none',
        overflow: 'hidden',
        MozUserSelect: 'text',
        WebkitUserSelect: 'text',
        msUserSelect: 'text',
        userSelect: 'text',
      },
      styleProps || {}
    )

    if (split === 'vertical') {
      Object.assign(style, { flexDirection: 'row', left: 0, right: 0 })
    } else {
      Object.assign(style, { bottom: 0, flexDirection: 'column', minHeight: '100%', top: 0, width: '100%' })
    }

    const classes = ['SplitPane', className, split, disabledClass]
    const pane1Style = Object.assign({}, paneStyle || {}, pane1StyleProps || {})
    const pane2Style = Object.assign({}, paneStyle || {}, pane2StyleProps || {})

    const pane1Classes = ['Pane1', paneClassName, pane1ClassName].join(' ')
    const pane2Classes = ['Pane2', paneClassName, pane2ClassName].join(' ')

    return (
      <div
        className={classes.join(' ')}
        ref={node => { this.splitPane = node }}
        style={style}
      >
        <Pane
          className={pane1Classes}
          key="pane1"
          ref={node => { this.pane1 = node}}
          size={primary === 'first' ? size || defaultSize || minSize : undefined}
          split={split}
          style={pane1Style}
        >
          {children[0]}
        </Pane>
        <Resizer
          className={disabledClass}
          onClick={onResizerClick}
          onDoubleClick={onResizerDoubleClick}
          onMouseDown={this.onMouseDown}
          onTouchStart={this.onTouchStart}
          onTouchEnd={this.onMouseUp}
          key='resizer'
          ref={(node) => this.resizer = node}
          resizerClassName={resizerClassNamesIncludingDefault}
          split={split}
          style={resizerStyle || {}}
        />
        <Pane
          className={pane2Classes}
          key='pane2'
          ref={node => {this.pane2 = node}}
          size={primary === 'second' ? size || defaultSize || minSize : undefined}
          split={split}
          style={pane2Style}
        >
          {children[1]}
        </Pane>
      </div>
    )
  }
}
