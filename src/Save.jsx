import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Save({
  valid,
  dirty,
  saving,
  text = 'Save',
  icon = '✓',
  progressIcon = '↻'
}) {
  const disabled = !valid || !dirty || saving;
  const classes = classnames({ spinner: saving });
  const displayIcon = saving ? progressIcon : icon;

  return (
    <button disabled={disabled} type="submit">
      <i className={classes}>{displayIcon}</i>
      {text}
    </button>
  );
}

Save.propTypes = {
  valid: PropTypes.bool,
  dirty: PropTypes.bool,
  saving: PropTypes.bool,
  text: PropTypes.string,
  icon: PropTypes.string,
  progressIcon: PropTypes.string
};
