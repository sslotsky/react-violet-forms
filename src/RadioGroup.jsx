import React, { PropTypes } from 'react'
import Radio from './Radio'
import formField from './FormField'
import { RADIO } from './fieldTypes'

export function RadioGroup({ options, ...rest }) {
  const renderRadio = (option, i) => (
    <Radio {...rest} label={option.text} val={option.value} key={i} />
  )

  return (
    <section className="hard">
      {options.map(renderRadio)}
    </section>
  );
}

export default formField({ type: RADIO })(RadioGroup)
