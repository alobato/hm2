import React from 'react'
import { Box } from 'theme-ui'
import autosize from 'autosize'
import { useDebounce } from 'hooks'
import { useUpdateEffect } from 'usehooks-ts'

const Textarea = React.forwardRef(({ value = '', onChange = () => {}, withSpeechRecognition = false, maxLength, ...rest }, ref) => {

  const textareaRef = React.useRef(ref)

  const [valueState, setValueState] = React.useState(value)
  const debouncedValue = useDebounce(valueState, 1000)
  useUpdateEffect(() => {
    onChange(debouncedValue)
  }, [debouncedValue])

  React.useEffect(() => {
    const textarea = textareaRef.current
    autosize(textarea)
    return (() => {
      autosize.destroy(textarea)
    })
  }, [value])

  const handleChange = (e) => {
    let newValue = e.target.value
    if (maxLength) {
      newValue = newValue.slice(0, maxLength)
    }
    setValueState(newValue)
  }

  return (
    <Box>
      <textarea ref={textareaRef} {...rest} value={valueState} onChange={handleChange} />
    </Box>
  )

})

export default Textarea
