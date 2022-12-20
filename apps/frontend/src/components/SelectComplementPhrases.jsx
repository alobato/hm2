import React from 'react'
import { Box } from 'theme-ui'

export const Option = ({ children }) => <div>{children}</div>

export const Blocks = ({ options, containerIsFocused, focused, handleClick, values }) => {
  return (
    <Box sx={{ borderTopStyle: 'solid', borderTopWidth: 1, borderTopColor: 'hairline', pt: 2 }}>
      {options.map((option, i) => {
        const isFocused = containerIsFocused && option && option.props && option.props.value && focused && focused.props && focused.props.value && option.props.value._id === focused.props.value._id
        const isSelected = (option && option.props && option.props.value && option.props.value._id && values && values.map(item => item.id).includes(option.props.value._id))

        let sx = { fontSize: 1, mb: 1, p: 1, cursor: 'pointer', color: 'muted' }
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

function SelectComplementPhrases({ children, onChange, values, title, onFocus, onBlur, tabIndex }) {
  const [focused, setFocused] = React.useState(children.find((option) => values && values.map(item => item.id).includes(option.props.value._id)) || children[0])
  const [containerIsFocused, setContainerIsFocused] = React.useState(false)

  const container = React.useRef()

  const handleClick = (option, index) => {
    setFocused(children[index])
    onChange(container.current, option.props.value)
  }

  const handleFocus = () => {
    setContainerIsFocused(true)
    onFocus(title)
  }

  const handleBlur = () => {
    setContainerIsFocused(false)
    onBlur(title)
  }

  const handleKeyDown = (e) => {
    if (e.which === 38 || e.which === 40) {
      e.preventDefault()
    }
  }

  const handleKeyUp = (e) => {
    e.preventDefault()

    const itemFocused = children.find((option) => option.props.value._id === focused.props.value._id)
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

  if (!!values.length) {
    tabIndex = -1
  }

  if (!!children.length) {
    return (
      <Box sx={{ px: 3 }}  ref={container} tabIndex={tabIndex} onFocus={handleFocus} onBlur={handleBlur} onKeyUp={handleKeyUp} onKeyDown={handleKeyDown}>
        <Blocks options={children} containerIsFocused={containerIsFocused} focused={focused} handleClick={handleClick} values={values} />
      </Box>
    )
  }
}

export default SelectComplementPhrases
