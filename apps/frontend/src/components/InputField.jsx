import React from 'react'
import debounce from 'lodash.debounce'
import styled from '@emotion/styled'
import AutosizeInput from './AutosizeInput'

const clearDisplay = (text) => {
  return text.replace(/^#\S+?#/, '')
}

const InputField = ({ onChange, name = null, className, defaultValue, placeholder, debounced = false }) => {
  const [value, setValue] = React.useState(defaultValue)
  const debounceChange = debounce((value) => onChange(value, name), 200)

  const handleChange = (e) => {
    setValue(e.target.value)
    if (debounced) {
      debounceChange(e.target.value)
    }
  }

  const handleBlur = () => {
    if (!debounced) {
      onChange(value, name)
    }
  }

  return (
    <AutosizeInput
      type='text'
      minWidth={80}
      value={clearDisplay(value)}
      className={className}
      style={{ display: 'inline-block' }}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
    />
  )

}

export default styled(InputField)`
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  line-height: 1.5;

  padding: 0 6px;
  background-color: hsla(200, 77%, 94%, 1);
  border: 1px solid hsla(0, 0%, 85%, 1);
  border-radius: 4px;
  outline: 0;
  &:hover, &:focus {
    border-color: #40a9ff !important;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    background-color: hsla(200, 77%, 83%, 1);
  }
  &:active {
    border-color: #096dd9 !important;
  }
`
