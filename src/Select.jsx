import React from 'react';
import PropTypes from 'prop-types';
import formField from './FormField';

export function Select({ id, input, options, prompt }) {
  const blank = prompt && (
    <option>{prompt}</option>
  );

  const renderOption = (option, index) => (
    <option key={index} value={option.value}>{option.text}</option>
  );

  return (
    <select {...input} id={id}>
      {blank}
      {options.map(renderOption)}
    </select>
  );
}

Select.propTypes = {
  id: PropTypes.string.isRequired,
  input: PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired
  }),
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      val: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
  ),
  prompt: PropTypes.string
};

export default formField()(Select);
