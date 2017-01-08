import React from 'react'
import { reduxForm, Field, Fields } from 'redux-form'
import { FormInput, RadioGroup, Checkbox, Select, Save } from 'react-violet-forms'
import { validator } from 'validate-this'
import { I18n } from 'react-redux-i18n'
import countries from 'country-list'

export function Form(props) {
  const countryOptions =  countries().getData().map(c => ({
    value: c.code,
    text: c.name
  }))

  const sameAsShipping = (fields) => {
    debugger
    return false
  }

  return (
    <div className="soft-half outset">
      <form onSubmit={props.handleSubmit}>
        <Field
          name="shipping.country"
          component={Select}
          label="Country"
          options={countryOptions}
          prompt="Select Country..."
        />
        <Fields
          names={['shipping.country', 'billing.country']}
          component={sameAsShipping}
        />
        <Save {...props} />
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'order'
})(Form)

