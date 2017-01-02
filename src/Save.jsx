import React from 'react'
import classnames from 'classnames'

export default function Save({
  valid,
  dirty,
  saving,
  text = 'Save',
  icon = '✓',
  progressIcon = '↻'
}) {
  const disabled = !valid || !dirty || saving
  const classes = classnames({ spinner: saving })
  const displayIcon = saving ? progressIcon : icon

  return (
    <button disabled={disabled} type="submit">
      <i className={classes}>{displayIcon}</i>
      {text}
    </button>
  )
}
