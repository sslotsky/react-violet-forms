import React from 'react'
import Code from './Code'

export default function Layout({ children, heading, text }) {
  return (
    <div>
      <h1 className="soft-quarter">{heading}</h1>
      <div className="row">
        <div className="col-1">
          {children}
        </div>
        <div className="col-1 right">
          <Code text={text} />
        </div>
      </div>
    </div>
  )
}
