import React from 'react'

const Caption = React.forwardRef(({ defaultValue = '', options = [], onChange = () => {}, ...rest }, ref) => {

  React.useImperativeHandle(ref, () => ({ reset: () => {
    setValue('')
   } }))

  const [value, setValue] = React.useState(defaultValue)

  const handleChange = (e) => {
    const targetValue = e.target.value
    setValue(targetValue)
    onChange(targetValue)
  }

  return (
    <>
      <input {...rest} ref={ref} list='options' value={value} onChange={handleChange} style={{ width: '100%', border: 'none', outline: 'none', textAlign: 'center', fontSize: '12px', fontFamily: 'Arial', color: 'black' }} autoComplete='nope' />
      <datalist id='options'>
        {options.map((option) => <option key={option} value={option} />)}
      </datalist>
    </>
  )
})

export default Caption
