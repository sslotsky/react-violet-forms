import React, { PropTypes } from 'react'

export default function CheckboxGroup({ fields, label, error = undefined }) {
  const renderCheckbox = (field, i) => (
    <label key={i}>
      <input type="checkbox" {...field.input} checked={!!field.input.value} />
      {field.label}
    </label>
  )

  const notice = error && <p className="error">{error}</p>

  return (
    <div className="form-group checkbox">
      {fields.map(renderCheckbox)}
      {notice}
    </div>
  );
}

