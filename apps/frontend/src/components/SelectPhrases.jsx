import React from 'react'
import { Box } from 'theme-ui'

export const Option = ({children}) => <div>{children}</div>

export const Blocks = ({ options, containerIsFocused, focused, handleClick, value, open }) => {
  return (
    <Box>
      {options.map((option, i) => {
        const isFocused = containerIsFocused && option.props.value._id === focused.props.value._id
        const isSelected = (value && option.props.value._id === value.id)

        let sx = { fontSize: 1, mb: 1, p: 1, cursor: 'pointer' }
        if (isFocused) {
          sx = { ...sx, bg: 'hairline' }
        }
        if (isSelected) {
          sx = { ...sx, bg: 'muted', color: 'canvas' }
        }

        return (
          <Box sx={sx} key={option.props.value._id} onClick={() => handleClick(option, i)} tabIndex={-1}>{option.props.children}</Box>
        )
      })}
    </Box>
  )
}

function SelectPhrases({children, onChange, value, title, onFocus, onBlur }) {
  const [focused, setFocused] = React.useState(children.find(option => value && value.id === option.props.value._id) || children[0])
  const [containerIsFocused, setContainerIsFocused] = React.useState(false)

  const container = React.useRef()

  const handleClick = (option, index) => {
    setFocused(children[index])
    onChange(container.current, option.props.value)
  }

  const handleFocus = () => {
    setContainerIsFocused(true)
    onFocus(title)
    setFocused(children[0])
  }

  const handleBlur = () => {
    // onCollapse(false)
    setContainerIsFocused(false)
    onBlur(title)
  }

  const handleKeyDown = (e) => {
    if (e.which === 38 || e.which === 40)
      e.preventDefault()
  }

  const handleKeyUp = (e) => {
    e.preventDefault()

    const itemFocused = children.find((item) => item.props.value._id === focused.props.value._id)
    const index = children.indexOf(itemFocused)

    if (e.which === 32 || e.which === 13) {
      const selectedItem = children[index]
      setFocused(selectedItem)
      onChange(container.current, selectedItem.props.value)
    }

    if (e.which === 37 || e.which === 38) {
      if (index > 0) {
        setFocused(children[index - 1])
      }
    }
    if (e.which === 39 || e.which === 40) {
      if (index < children.length - 1) {
        setFocused(children[index + 1])
      }
    }
  }

  return (
    <Box sx={{ px: 3 }} ref={container} tabIndex={value ? -1 : 0} onFocus={handleFocus} onBlur={handleBlur} onKeyUp={handleKeyUp} onKeyDown={handleKeyDown}>
      <Blocks open={false} options={children} containerIsFocused={containerIsFocused} focused={focused} handleClick={handleClick} value={value} />
    </Box>
  )

}

export default SelectPhrases
