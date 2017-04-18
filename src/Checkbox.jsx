import React from 'react';
import PropTypes from 'prop-types';

export default function Checkbox({ input, label }) {
  return (
    <div className="form-group checkbox">
      <label>
        <input type="checkbox" {...input} checked={input.value} />
        {label}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    value: PropTypes.bool,
    onChange: PropTypes.func.isRequired
  })
};
