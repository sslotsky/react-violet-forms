import React from 'react';
import PropTypes from 'prop-types';
import Radio from './Radio';
import formField from './FormField';
import { RADIO } from './fieldTypes';

export function RadioGroup({ options, ...rest }) {
  const renderRadio = (option, i) => (
    <Radio {...rest} label={option.text} val={option.value} key={i} />
  );

  return (
    <section className="hard">
      {options.map(renderRadio)}
    </section>
  );
}

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      val: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    })
  )
};

export default formField({ type: RADIO })(RadioGroup);
