import React, { PropTypes } from 'react'

export default function Checkbox({ input, label }) {
  return (
    <div className="form-group checkbox">
      <label>
        <input type="checkbox" {...input} />
        {label}
      </label>
    </div>
  );
}
