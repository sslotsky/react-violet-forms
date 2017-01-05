import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { FormInput, RadioGroup, Save } from 'react-violet-forms'
import { validator } from 'validate-this'
import { I18n } from 'react-redux-i18n'

export function SignUp(props) {
  return (
    <div className="soft-half outset">
      <form onSubmit={props.handleSubmit}>
        <Field name="username" component={FormInput} label="Username" />
        <Field name="password" component={FormInput} label="Password" type="password" />
        <Field name="confirm" component={FormInput} label="Confirm Password" type="password" />
        <Field name="color" component={RadioGroup} options={{ blue: 'Blue', red: 'Red' }} />
        <Save {...props} />
      </form>
    </div>
  )
}

function validate(values) {
  return validator(values, v => {
    v.validate('username', 'password', 'confirm').required()
    v.validate('confirm').matches('password')
  }, (message, field) => I18n.t(`forms.newUser.${field}.${message}`))
}

export default reduxForm({
  form: 'newUser',
  validate
})(SignUp)
