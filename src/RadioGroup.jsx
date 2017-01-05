import React, { PropTypes } from 'react'
import Radio from './Radio'
import formField from './FormField'
import { RADIO } from './fieldTypes'

export function RadioGroup({ options, meta, ...rest }) {
  const group = Object.keys(options).map((val, i) =>
    <Radio {...rest} label={options[val]} val={val} key={i} />
  )

  return (
    <section>
      {group}
    </section>
  );
}

export default formField({ type: RADIO })(RadioGroup)
