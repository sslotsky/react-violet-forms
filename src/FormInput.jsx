import React from 'react';
import PropTypes from 'prop-types';
import formField from './FormField';

export function FormInput({
  id,
  input,
  type = 'text'
}) {
  return (
    <input {...input} id={id} type={type} />
  );
}

FormInput.propTypes = {
  id: PropTypes.string.isRequired,
  input: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  }).isRequired,
  type: PropTypes.string
};

export default formField()(FormInput);
