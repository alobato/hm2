import React from 'react'
import { Flex, Box } from 'theme-ui'
import PopOver2 from './PopOver2'
import { Input, Button } from 'components'

function PromptButton({ children, onConfirm, placement = 'bottom-start', placeholder = '', ...rest }) {

  const [value, setValue] = React.useState('')

  const handleConfirm = (onRequestClose) => {
    onConfirm(value)
    setValue('')
    onRequestClose()
  }

  return (
    <PopOver2 width={560} placement={placement} render={({ onRequestClose }) => (
      <Box sx={{ p: 3 }}>
        <Box sx={{ mb: 2 }}>
          <Input sx={{ width: '100%' }} value={value} onChange={(e) => setValue(e.target.value)} placeholder={placeholder} />
        </Box>
        <Flex>
          <Box><Button onClick={() => handleConfirm(onRequestClose)}>Ok</Button></Box>
          <Box sx={{ ml: 2 }}><Button onClick={() => onRequestClose()}>Cancelar</Button></Box>
        </Flex>
      </Box>
    )}>
      <Button>{children}</Button>
    </PopOver2>
  )
}

export default PromptButton
