import React, { Component }  from 'react'
import PropTypes from 'prop-types'

import './Resizer.css'

export const RESIZER_DEFAULT_CLASSNAME = 'Resizer'

export default class Resizer extends Component {

  static defaultProps = {
    resizerClassName: RESIZER_DEFAULT_CLASSNAME,
  }

  static propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onDoubleClick: PropTypes.func,
    onMouseDown: PropTypes.func.isRequired,
    onTouchStart: PropTypes.func.isRequired,
    onTouchEnd: PropTypes.func.isRequired,
    split: PropTypes.oneOf(['vertical', 'horizontal']),
    style: PropTypes.object,
    resizerClassName: PropTypes.string.isRequired,
  }

  render() {
    const {className, onClick, onDoubleClick, onMouseDown, onTouchEnd, onTouchStart, resizerClassName, split, style} = this.props
    const classes = [resizerClassName, split, className]

    return (
      <span
        className={classes.join(' ')}
        style={style || {}}
        onMouseDown={e => onMouseDown(e)}
        onTouchStart={e => {
          e.preventDefault()
          onTouchStart(e)
        }}
        onTouchEnd={e => {
          e.preventDefault()
          onTouchEnd(e)
        }}
        onClick={e => {
          if (onClick) {
            e.preventDefault()
            onClick(e)
          }
        }}
        onDoubleClick={e => {
          if (onDoubleClick) {
            e.preventDefault()
            onDoubleClick(e)
          }
        }}
      />
    )
  }
}
