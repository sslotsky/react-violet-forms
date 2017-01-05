import React, { PropTypes } from 'react'

export default function Radio({
  input,
  val,
  label
}) {
  const { value, onChange, ...rest } = input
  const checked = value === val
  const update = e => onChange(e.target.value)

  return (
    <label>
      <input
        type="radio"
        {...rest}
        value={val}
        checked={checked}
        onChange={update}
      />
      {label}
    </label>
  )
}

Radio.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.shape({
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
  }),
  val: PropTypes.string.isRequired
}
