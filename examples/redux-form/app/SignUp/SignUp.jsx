import React from 'react'
import { connect } from 'react-redux'

import Form from './Form'
import Layout from '../Layout'
import * as actions from '../actions'

import signUpCode from 'raw!./SignUp.txt'

export function SignUp({ submit, saving }) {
  return (
    <Layout heading="Simple SignUp Form" text={signUpCode}>
      <Form
        onSubmit={submit}
        saving={saving}
      />
    </Layout>
  )
}

export default connect(
  state => state.app,
  { submit: actions.submit('newUser') })
(SignUp)
