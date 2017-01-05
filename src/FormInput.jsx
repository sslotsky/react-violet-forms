import React, { PropTypes } from 'react'
import formField from './FormField'

export function FormInput({
  label,
  input,
  type = 'text'
}) {
  return (
    <section>
      <label htmlFor={input.name}>{label}</label>
      <input {...input} type={type} />
    </section>
  )
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }).isRequired,
  type: PropTypes.string
}

export default formField()(FormInput)
