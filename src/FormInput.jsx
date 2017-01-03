import React, { PropTypes } from 'react'

export default function FormInput({
  label,
  input,
  meta: { touched, error },
  type = 'text'
}) {
  const errors = touched && error && error.map((e, i) => (
    <p className="error" key={i}>{e}</p>
  ))

  return (
    <div className="form-group">
      <label htmlFor={input.name}>{label}</label>
      <input {...input} type={type} />
      {errors}
    </div>
  )
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }).isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.arrayOf(PropTypes.string)
  }),
  type: PropTypes.string
}

