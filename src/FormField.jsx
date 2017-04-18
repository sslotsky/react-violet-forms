import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as fieldTypes from './fieldTypes';

export function FormField({
  id,
  label,
  children,
  meta: { touched, error },
  type
}) {
  const errors = touched && error && error.map((e, i) => (
    <p className="error" key={i}>{e}</p>
  ));

  const customClass = {
    [fieldTypes.RADIO]: 'radio'
  }[type];

  const classes = classnames('form-group', customClass);
  const fieldLabel = label && (
    <label htmlFor={id}>{label}</label>
  );

  return (
    <div className={classes}>
      {fieldLabel}
      {children}
      {errors}
    </div>
  );
}

FormField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  input: PropTypes.shape({
    value: PropTypes.oneOfType([
      PropTypes.string, PropTypes.bool, PropTypes.number
    ]),
    onChange: PropTypes.func.isRequired
  }).isRequired,
  children: PropTypes.element.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.arrayOf(PropTypes.string)
  })
};

export default function formField(config = {}) {
  const { type = fieldTypes.INPUT } = config;

  return Component => {
    const Wrapped = props => (
      <FormField {...props} id={props.input.name} type={type}>
        <Component {...props} id={props.input.name} />
      </FormField>
    );

    Wrapped.propTypes = {
      input: PropTypes.shape({
        name: PropTypes.string.isRequired
      }).isRequired
    };

    return Wrapped;
  };
}
