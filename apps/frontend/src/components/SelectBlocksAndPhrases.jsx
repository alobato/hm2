import React from 'react'
import { Flex, Box } from 'theme-ui'
import { Icon } from 'components'

export const Option = ({ children }) => <div>{children}</div>

function Blocks({ options, containerIsFocused, focused, handleClick, value, open }) {
  const option = options.find((item) => item.props.value === value)
  if (open === false && option) {
    const i = options.indexOf(option)
    const isFocused = containerIsFocused && option.props.value === focused.props.value
    const isSelected = option.props.value === value

    let sx = { px: 2, py: 1, mr: 1, cursor: 'pointer', bg: 'hairline', borderRadius: 'extra', flexShrink: 0, fontSize: 0, fontWeight: 500 }
    if (isFocused) {
      sx = { ...sx }
    }
    if (isSelected) {
      sx = { ...sx, color: 'canvas', bg: 'muted' }
    }
    return (
      <Flex sx={{ px: 3, mb: 2 }}>
        <Box sx={sx} onClick={() => handleClick(option, i)} tabIndex={-1}>{option.props.children}</Box>
        {(options.length > 1) && (
          <Box tabIndex={-1} sx={{ cursor: 'pointer' }} onClick={() => handleClick(option, i)}>
            <Icon height={20} path='M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z' />
          </Box>
        )}
      </Flex>
    )
  }
  return (
    <Flex sx={{ px: 3, mb: 2, overflow: 'auto', '&::-webkit-scrollbar': { display: 'none' } }}>
      {options.map((option, i) => {
        const isFocused = containerIsFocused && option.props.value === focused.props.value
        const isSelected = option.props.value === value

        let sx = { px: 2, py: 1, mr: 1, cursor: 'pointer', bg: 'hairline', borderRadius: 'extra', flexShrink: 0, fontSize: 0, fontWeight: 500 }
        if (isFocused) {
          sx = { ...sx }
        }
        if (isSelected) {
          sx = { ...sx, color: 'canvas', bg: 'muted' }
        }
        return (
          <Box sx={sx} key={option.props.value} onClick={() => handleClick(option, i)} tabIndex={-1}>{option.props.children}</Box>
        )
      })}
    </Flex>
  )
}

function SelectBlocksAndPhrases({ children, onChange, onCollapse, collapsed, title, value, color, onHideClick, showIgnore, showUndoIgnore, onIgnoreClick, onUndoIgnoreClick, onFocus, onBlur, tabIndex }) {
  const [focused, setFocused] = React.useState(children.find((item) => value && item.props.value === value) || children[0])
  const [containerIsFocused, setContainerIsFocused] = React.useState(false)

  const container = React.useRef()

  const handleClick = (option, index) => {
    setFocused(children[index])
    return onChange(container.current, option.props.value)
  }

  const handleFocus = () => {
    onCollapse(true)
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

    const itemFocused = children.find((item) => item.props.value === focused.props.value)
    const index = children.indexOf(itemFocused)

    if (e.which === 32 || e.which === 13) {
      const selectedItem = children[index]
      setFocused(selectedItem)
      if (selectedItem && selectedItem.props && selectedItem.props.value) {
        onChange(container.current, selectedItem.props.value)
      }
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
    if (e.which === 8) {
      onHideClick(title)
    }
    if (e.which === 73) {
      if (showIgnore) {
        onIgnoreClick(title)
      }
      if (showUndoIgnore) {
        onUndoIgnoreClick(title)
      }
    }
  }

  if (value) {
    tabIndex = -1
  }

  return (
    <Box ref={container} tabIndex={tabIndex} onFocus={handleFocus} onBlur={handleBlur} onKeyUp={handleKeyUp} onKeyDown={handleKeyDown}>

      <Box sx={{ px: 3 }}>
        <Flex sx={{ alignItems: 'center', mt: 2, mb: 3 }}>
          <Box sx={{ backgroundColor: color, width: 12, height: 12, mr: 2 }} />
          <Box sx={{ fontWeight: 600, fontSize: 2, lineHeight: 1 }}>{title}</Box>
        </Flex>

        {/* <div title='Desativar grupo' style={{position: 'absolute', display: 'inline-block', right: 10, top: 10, lineHeight: 0}} onClick={e => { e.stopPropagation(); onHideClick(title)}}>
          <div style={{display: 'inline-block', pointerEvents: 'none', position: 'relative', color: 'hsla(0, 0%, 75%, 1)'}}><svg viewBox='0 0 16 16' width={12} height={12} fill='currentColor' style={{pointerEvents: 'none'}}><path d='M 7 1 L 7 7 L 8 7 L 8 1 Z M 6 1.179688 C 3.136719 1.863281 1 4.433594 1 7.5 C 1 11.085938 3.914063 14 7.5 14 C 11.085938 14 14 11.085938 14 7.5 C 14 4.433594 11.863281 1.863281 9 1.179688 L 9 2.214844 C 11.304688 2.871094 13 4.988281 13 7.5 C 13 10.535156 10.53125 13 7.5 13 C 4.46875 13 2 10.53125 2 7.5 C 2 4.988281 3.695313 2.867188 6 2.210938 Z' /></svg></div>
        </div> */}
        {false && showIgnore &&
          <div title='Ignorar o modelo selecionado e ver todas os blocos e frases' style={{position: 'absolute', display: 'inline-block', right: 30, top: 10, lineHeight: 0}} onClick={e => { e.stopPropagation(); onIgnoreClick(title)}}>
            <div style={{display: 'inline-block', pointerEvents: 'none', position: 'relative', color: 'hsla(0, 0%, 75%, 1)'}}><svg viewBox='0 0 16 16' width={12} height={12} fill='currentColor' style={{pointerEvents: 'none'}}><path d='M 3 2 L 3 2.5 L 3 3.9746094 C 3 4.4677431 3.242869 4.9291272 3.6484375 5.2089844 L 7 7.7480469 L 7 14 L 9 12 L 9 7.7480469 L 12.351562 5.2089844 C 12.757131 4.9291272 13 4.4677431 13 3.9746094 L 13 2 L 3 2 z M 4 3 L 12 3 L 12 3.9746094 C 12 4.1394756 11.91963 4.2925759 11.783203 4.3867188 L 11.773438 4.3925781 L 8.3320312 7 L 7.6679688 7 L 4.2265625 4.3925781 L 4.2167969 4.3867188 C 4.0803654 4.292576 4 4.1394756 4 3.9746094 L 4 3 z M 10.853516 10.146484 L 10.146484 10.853516 L 12.292969 13 L 10.146484 15.146484 L 10.853516 15.853516 L 13 13.707031 L 15.146484 15.853516 L 15.853516 15.146484 L 13.707031 13 L 15.853516 10.853516 L 15.146484 10.146484 L 13 12.292969 L 10.853516 10.146484 z' /></svg></div>
          </div>
        }
        {false && showUndoIgnore &&
          <div title='Ver somente blocos e frases que correspondem ao modelo selecionado' style={{position: 'absolute', display: 'inline-block', right: 30, top: 10, lineHeight: 0}} onClick={e => { e.stopPropagation(); onUndoIgnoreClick(title)}}>
            <div style={{display: 'inline-block', pointerEvents: 'none', position: 'relative', color: 'hsla(0, 0%, 0%, 0.65)'}}><svg viewBox='0 0 16 16' width={12} height={12} fill='currentColor' style={{pointerEvents: 'none'}}><path d='M 3 2 L 3 3.976563 C 3 4.46875 3.242188 4.929688 3.648438 5.210938 L 7 7.75 L 7 14 L 9 12 L 9 7.75 L 12.351563 5.210938 C 12.757813 4.929688 13 4.46875 13 3.976563 L 13 2 Z M 4 3 L 12 3 L 12 3.976563 C 12 4.140625 11.917969 4.292969 11.78125 4.386719 L 11.773438 4.390625 L 8.332031 7 L 7.667969 7 L 4.226563 4.390625 L 4.21875 4.386719 C 4.082031 4.292969 4 4.140625 4 3.976563 Z' /></svg></div>
          </div>
        }
      </Box>

      <Blocks open={false} options={children} containerIsFocused={containerIsFocused} focused={focused} handleClick={handleClick} value={value} />
    </Box>
  )

}

export default SelectBlocksAndPhrases
