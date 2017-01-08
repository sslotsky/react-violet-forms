import React from 'react'

import CodeMirror from 'react-codemirror'
import 'codemirror/mode/jsx/jsx'

const config = {
  mode: 'javascript',
  theme: 'erlang-dark',
  readOnly: true
}

export default function Code({ text }) {
  return (
    <CodeMirror options={config} value={text} />
  )
}
