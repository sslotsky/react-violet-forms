import React from 'react';
import PropTypes from 'prop-types';

export default function CheckboxGroup({ fields, label, error = undefined }) {
  const renderCheckbox = (field, i) => (
    <label key={i}>
      <input type="checkbox" {...field.input} checked={field.input.value} />
      {field.label}
    </label>
  );

  const notice = error && <p className="error">{error}</p>;

  return (
    <div className="form-group checkbox">
      {fields.map(renderCheckbox)}
      {notice}
    </div>
  );
}

CheckboxGroup.propTypes = {
  error: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.bool,
      onChange: PropTypes.func.isRequired
    })
  )
};
