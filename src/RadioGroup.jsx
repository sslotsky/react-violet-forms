import React, { PropTypes } from 'react'
import Radio from './Radio'

export default function RadioGroup({ options, ...rest }) {
  const group = Object.keys(options).map((val, i) =>
    <Radio {...rest} label={options[val]} val={val} key={i} />
  )

  return (
    <section>
      {group}
    </section>
  );
}
