import React, { PropTypes } from 'react'
import classnames from 'classnames'
import * as fieldTypes from './fieldTypes'

export function FormField({
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

  return (
    <div className={classes}>
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
    <FormField {...props} type={type}>
      <Component {...props} />
    </FormField>
  )
}
