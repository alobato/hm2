import React from 'react'
import { Box } from 'theme-ui'
import { useCombobox, useMultipleSelection } from 'downshift'

// const selectedItemCss = css`
//   border: 1px solid ${props => (props.theme && props.theme.colors && props.theme.colors.grey200) ? props.theme.colors.grey200 : 'hsla(0, 0%, 86%, 1)'};
//   margin-left: 8px;
//   border-radius: 8px;
//   background: ${props => (props.theme && props.theme.colors && props.theme.colors.grey100) ? props.theme.colors.grey100 : 'hsla(0, 0%, 96%, 1)'};
//   padding: 4px 8px;
// `

// const selectedItemIconCss = css`
//   cursor: pointer;
//   margin-left: 8px;
// `

// const combomboxCss = css`
//   display: inline-block;
//   & input {
//     font-family: inherit;
//     font-size: inherit;
//     color: inherit;
//     padding: 8px 12px;
//     border: 1px solid ${props => (props.theme && props.theme.colors && props.theme.colors.grey200) ? props.theme.colors.grey200 : 'hsla(0, 0%, 86%, 1)'};
//     ${props => props.width && css`width: ${props.width};`}
//     &:focus {
//       outline: 3px solid ${props => (props.theme && props.theme.colors && props.theme.colors.grey100) ? props.theme.colors.grey100 : 'hsla(0, 0%, 96%, 1)'};
//     }
//   }
// `

// const menuMultipleCss = css`
//   max-height: 180px;
//   overflow-y: auto;
//   width: 335px;
//   margin: 0;
//   border-top: 0;
//   background: white;
//   position: absolute;
//   z-index: 1000;
//   list-style: none;
//   padding: 0;
//   left: 0;
//   border: 1px solid ${props => (props.theme && props.theme.colors && props.theme.colors.grey200) ? props.theme.colors.grey200 : 'hsla(0, 0%, 86%, 1)'};
//   margin-top: 2px;
//   background: ${props => (props.theme && props.theme.colors && props.theme.colors.grey100) ? props.theme.colors.grey100 : 'hsla(0, 0%, 96%, 1)'};
// `

// const comboboxWrapperCss = css`
//   position: relative;
//   display: inline-flex;
//   flex-wrap: wrap;
// `

function DropdownMultipleCombobox({ items: initialItems, value: initialSelectedItems, onChange, valueField, labelField }) {

  const [inputValue, setInputValue] = React.useState('')

  const { getSelectedItemProps, getDropdownProps, addSelectedItem, removeSelectedItem, selectedItems } = useMultipleSelection({ initialSelectedItems, onSelectedItemsChange: ({ selectedItems }) => { onChange(selectedItems) } })

  const getFilteredItems = (items) => {
    return items.filter(item => {
      return selectedItems.map(item => item[valueField]).indexOf(item[valueField]) < 0 && item[labelField].toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(inputValue.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^A-Za-z0-9\s]/g, ''))
    })
  }

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps,
    selectItem,
    openMenu
  } = useCombobox({
    itemToString: item => item ? item[labelField] : '',
    inputValue,
    items: getFilteredItems(initialItems),
    onStateChange: ({ inputValue, type, selectedItem }) => {

      switch (type) {
        case useCombobox.stateChangeTypes.InputChange:
          setInputValue(inputValue)
          break
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          if (selectedItem) {
            setInputValue('')
            addSelectedItem(selectedItem)
            selectItem(null)
          }

          break
        default:
          break
      }
    }
  })

  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={{ position: 'relative', display: 'inline-flex', flexWrap: 'wrap' }}>
        <Box sx={{ display: 'inline-block' }} {...getComboboxProps()}>{/* combomboxCss */}
          <input {...getInputProps(getDropdownProps({preventKeyAction: isOpen}))} />
          <button type='button' {...getToggleButtonProps()} aria-label='toggle menu' />
        </Box>
      </Box>
      <ul {...getMenuProps()} style={{ display: isOpen ? 'block' : 'none' }}>{/* menuMultipleCss */}
        {isOpen && getFilteredItems(initialItems).map((item, index) => (
          <li
            style={highlightedIndex === index ? { backgroundColor: '#bde4ff', padding: '10px 4px', borderBottom: '1px solid hsl(0 0% 0% / 0.1)' } : { padding: '10px 4px', borderBottom: '1px solid hsl(0 0% 0% / 0.1)' }}
            key={`${item[valueField]}${index}`}
            {...getItemProps({ item, index })}
          >
            {item[labelField]}
          </li>
        ))}
      </ul>
      {selectedItems.map((selectedItem, index) => (
          <span key={`selected-item-${index}`} {...getSelectedItemProps({ selectedItem, index })}>{/* selectedItemCss */}
            {selectedItem[labelField]}
            <span onClick={() => removeSelectedItem(selectedItem)}>&#10005;</span>{/* selectedItemIconCss */}
          </span>
        ))}
    </Box>
  )

}

export default DropdownMultipleCombobox
