import React from 'react'
import { connect } from 'react-redux'

import Form from './Form'
import Layout from '../Layout'
import * as actions from '../actions'

import hodgePodgeCode from 'raw!./HodgePodge.txt'

export function HodgePodge({ submit, saving }) {
  const props = {
    onSubmit: submit,
    saving
  }

  return (
    <Layout heading="Yar, me favorite things!" text={hodgePodgeCode}>
      <Form {...props} />
    </Layout>
  )
}

export default connect(
  state => state.app,
  { submit: actions.submit('hodgePodge') })
(HodgePodge)

