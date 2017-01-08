import React from 'react'
import { connect } from 'react-redux'

import Form from './Form'
import Layout from '../Layout'
import * as actions from '../actions'

import orderFormCode from 'raw!./OrderForm.txt'

export function OrderForm({ submit, saving }) {
  const props = {
    onSubmit: submit,
    initialValues: {
      shipping: {},
      billing: {}
    },
    saving
  }

  return (
    <Layout heading="Order Form" text={orderFormCode}>
      <Form {...props} />
    </Layout>
  )
}

export default connect(
  state => state.app,
  { submit: actions.submit('order') })
(OrderForm)
