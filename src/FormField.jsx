import React, { PropTypes } from 'react'
import classnames from 'classnames'
import * as fieldTypes from './fieldTypes'

export function FormField({
  id,
  label,
  children,
  meta: { touched, error },
  type
}) {
  const errors = touched && error && error.map((e, i) => (
    <p className="error" key={i}>{e}</p>
  ))

  const customClass = {
    [fieldTypes.RADIO]: 'radio'
  }[type]

  const classes = classnames('form-group', customClass)
  const fieldLabel = label && (
    <label htmlFor={id}>{label}</label>
  )

  return (
    <div className={classes}>
      {fieldLabel}
      {children}
      {errors}
    </div>
  )
}

FormField.propTypes = {
  children: PropTypes.element.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.arrayOf(PropTypes.string)
  })
}

export default function formField(config = {}) {
  const { type = fieldTypes.INPUT } = config
  return Component => props => (
    <FormField {...props} id={props.input.name} type={type}>
      <Component {...props} id={props.input.name} />
    </FormField>
  )
}
