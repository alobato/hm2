import React, { Component }  from 'react'
import PropTypes from 'prop-types'

export default class Pane extends Component {
  state = {
    size: this.props.size
  }

  static propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    split: PropTypes.oneOf(['vertical', 'horizontal']),
    style: PropTypes.object
  }

  render() {
    const { children, className, split, style: styleProps } = this.props
    const { size } = this.state
    const classes = ['Pane', split, className]

    const style = Object.assign({}, styleProps || {}, { flex: 1, position: 'relative', outline: 'none' })

    if (size !== undefined) {
      if (split === 'vertical') {
        style.width = size
      } else {
        style.height = size
        style.display = 'flex'
      }
      style.flex = 'none'
    }

    return (
      <div className={classes.join(' ')} style={style}>
        {children}
      </div>
    )
  }
}
