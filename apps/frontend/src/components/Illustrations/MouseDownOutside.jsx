import React, { Component } from 'react'

export default class MouseDownOutside extends Component {

  constructor(props) {
    super(props)
    this.getContainer = this.getContainer.bind(this)
  }

  getContainer(ref) {
    this.container = ref
  }

  render() {
    const { children, onClickOutside, ...props } = this.props
    return <div {...props} ref={this.getContainer}>{children}</div>
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handle, true)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handle, true)
  }

  handle = e => {
    const { onClickOutside } = this.props
    const el = this.container
    if (!el.contains(e.target)) onClickOutside(e)
  }
}
