import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormInput, Save } from 'react-violet-forms'
import { validator } from 'validate-this'

export function ReduxForm(props) {
  return (
    <div className="soft-half outset" style={{ width: '50%' }}>
      <form onSubmit={props.handleSubmit}>
        <Field name="username" component={FormInput} label="Username" />
        <Field name="email" component={FormInput} label="Email" />
        <Field name="password" component={FormInput} label="Password" type="password" />
        <Field name="confirm" component={FormInput} label="Confirm Password" type="password" />
        <Save {...props} />
      </form>
    </div>
  )
}

function validate(values) {
  return validator(values, v => {
    v.validate('username', 'email', 'password', 'confirm').required()
    v.validate('confirm').matches('password')
  })
}

export default reduxForm({
  form: 'newUser',
  validate
})(ReduxForm)
