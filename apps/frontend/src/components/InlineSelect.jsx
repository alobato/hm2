import React from 'react'
import { components } from 'react-select'
import Creatable from 'react-select/creatable'

const DropdownIndicator = props => (
  <components.DropdownIndicator {...props}>
    <svg  style={{transform: `rotate(${props.selectProps.menuIsOpen ? -180 : 0 }deg)`, transition: 'all 300ms'}} viewBox='0 0 24 24' height={24} fill='currentColor'>
      <path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' />
    </svg>
  </components.DropdownIndicator>
)

const selectCustomStyles = {
  valueContainer: (base, state) => ({
    ...base,
    padding: '0 6px 0 4px',
    lineHeight: 1,
    flexDirection: 'row-reverse'
  }),
  option: (base, state) => ({
    ...base,
    padding: '5px 12px',
    fontSize: 14,
    color: state.isSelected ? 'rgba(0,0,0,.65)' : 'inherit',
    fontWeight: state.isSelected ? '600' : 'inherit',
    backgroundColor: state.isFocused ? 'hsla(199, 100%, 95%, 1)' : 'inherit',
    whiteSpace: 'nowrap'
  }),
  container: (base, state) => ({
    ...base,
    display: 'inline-block'
  }),
  control: (base, state) => ({
    ...base,
    minHeight: 26,
    padding: 0,
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 4,
    transition: 'all 300ms',
    boxShadow: state.isFocused ? '0 0 0 2px rgba(24, 144, 255, .2)' : null,
    borderColor: state.isFocused ? 'hsla(207, 100%, 63%, 1)' : 'hsla(0, 0%, 85%, 1)',
    backgroundColor: state.isFocused ? 'hsla(54, 77%, 83%, 1)' : 'hsla(54, 77%, 94%, 1)',
    '&:hover': {
      borderColor: 'hsla(207, 100%, 63%, 1)'
    }
  }),
  singleValue: (base, state) => ({
    ...base,
    color: 'hsla(0, 0%, 0%, 0.65)',
    position: 'inherit',
    textOverflow: 'inherit',
    maxWidth: 'inherit',
    transform: 'initial',
    marginLeft: 0,
    marginRight: 0,
    minWidth: 80,
    overflow: 'hidden'
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    padding: 4,
    fontSize: 11,
    color: 'hsla(0, 0%, 0%, 0.25)'
  }),
  indicatorSeparator: (base, state) => ({
    ...base,
    marginBottom: 6,
    marginTop: 6
  }),
  menu: (base, state) => ({
    ...base,
    width: 'auto'
  })
}

const clearDisplay = (text) => {
  text = text.replace(/#.+?#/, '')
  text = text.replace(/<.+?>/, '')
  return text
}

const InlineSelect = ({ disabled = false, options, selected, onChange = () => {} }) => {

  let fieldName = ''
  const fieldNameMatch = options[0].match(/#(.+?)#/)
  if (fieldNameMatch && fieldNameMatch.length > 1) {
    fieldName = `#${fieldNameMatch[1]}#`
  }

  options = options.map((item) => {
    item = item.replace(/#.+?#/, '')
    return { value: `${fieldName}${item}`, label: clearDisplay(item) }
  })
  options = [{ value: '', label: '\u00A0' }, ...options]

  return (
    <Creatable
      isDisabled={disabled}
      styles={selectCustomStyles}
      components={{DropdownIndicator}}
      isSearchable={true}
      value={selected ? {value: selected, label: clearDisplay(selected)} : {value: '', label: '\u00A0'}}
      onChange={onChange}
      options={options}
      menuPlacement='auto'
      formatCreateLabel={() => 'Criar'}
      onKeyDown={() => {}}
    />
  )
}

export default InlineSelect
