import React, { PropTypes } from 'react'
import formField from './FormField'

export function Select({ id, label, input, options, prompt }) {
  const blank = prompt && (
    <option>{prompt}</option>
  )

  const renderOption = (option, index) => (
    <option key={index} value={option.value}>{option.text}</option>
  )

  return (
    <select {...input} id={id}>
      {blank}
      {options.map(renderOption)}
    </select>
  )
}

export default formField()(Select)
