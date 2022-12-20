import React from 'react'
import { Flex, Box } from 'theme-ui'
import { useFloating } from '@floating-ui/react-dom'
import { Portal } from 'components'
import { useMergeRefs } from 'use-callback-ref'

function PopOver2({ children, render, placement = 'bottom', width = 200, onOpen = () => {}, onClose = () => {}, zIndex = 1, ...props }) {
  const ref = React.useRef()
  const wrapperRef = React.useRef(null)
  const [open, setOpen] = React.useState(false)
  const { x, y, reference, floating, strategy } = useFloating({ placement })

  const handleClick = (e) => {
    if (e.button === 2) {
      return false
    }
    if (e.target.id === 'MenuItem') {
      return setTimeout(() => {
        setOpen(false)
        onClose()
      }, 100)
    }
    if (ref.current && ref.current.contains(e.target)) {
      return setOpen((current) => {
        if (!current) {
          onOpen()
        }
        return !current
      })
    }
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      return setOpen(false)
      onClose()
    }
  }

  React.useEffect(() => {
    // https://codesandbox.io/s/outside-alerter-hooks-lmr2y
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  return (
    <>
      <Flex sx={{ cursor: 'pointer', userSelect: 'none' }} ref={useMergeRefs([ref, reference])}>{children}</Flex>
      {open && (
        <Portal>
          <Box ref={wrapperRef}>
            <Box sx={{ bg: 'hairline', width, p: 2, zIndex }} ref={floating} style={{ position: strategy, top: y ?? '', left: x ?? '' }}>
              {render({ onRequestClose: () => setOpen(false) })}
            </Box>
          </Box>
        </Portal>
      )}
    </>
  )
}

export default PopOver2
