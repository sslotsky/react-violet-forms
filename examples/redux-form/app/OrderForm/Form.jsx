import React, { Component } from 'react'
import { reduxForm, Field, Fields } from 'redux-form'
import { FormInput, Checkbox, Save } from 'react-violet-forms'
import { validator } from 'validate-this'
import { I18n } from 'react-redux-i18n'

const fieldNames = [
  'address1',
  'address2',
  'city',
  'state',
  'zip'
]

const [shipping, billing] = ['shipping', 'billing'].map(address =>
  fieldNames.map(f => `${ address }.${ f }`)
)

export class Form extends Component {
  state = {
    sameAsShipping: false
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (nextProps.pristine && this.state.sameAsShipping) {
      this.setState({ sameAsShipping: false })
    }
  }

  render() {
    const sameAsShipping = (fields) => {
      const onChange = e => {
        const { checked } = e.target
        const { billing, shipping } = fields
        const newBilling = field => (checked && field.input.value) || ''

        fieldNames.forEach(f => {
          const { onChange, onBlur } = billing[f].input

          onChange(newBilling(shipping[f]))
          onBlur()
        })
        this.setState({ sameAsShipping: checked })
      }

      const input = {
        value: this.state.sameAsShipping,
        checked: this.state.sameAsShipping,
        onChange
      }

      return (
        <Checkbox
          label="Same as shipping"
          input={input}
        /> 
      )
    }

    const addressFields = field => (
      <section>
        <Field
          name={`${field}.address1`}
          component={FormInput}
          label="Street Address 1"
        />
        <Field
          name={`${field}.address2`}
          component={FormInput}
          label="Street Address 2"
        />
        <Field
          name={`${field}.city`}
          component={FormInput}
          label="City"
        />
        <Field
          name={`${field}.state`}
          component={FormInput}
          label="State"
        />
        <Field
          name={`${field}.zip`}
          component={FormInput}
          label="Postal Code"
        />
      </section>
    )

    return (
      <div className="soft-half outset">
        <form onSubmit={this.props.handleSubmit}>
          <h2>Shipping</h2>
          {addressFields('shipping')}
          <h2>Billing</h2>
          <Fields
            names={shipping.concat(billing)}
            component={sameAsShipping}
          />
          {addressFields('billing')}
          <Save {...this.props} />
        </form>
      </div>
    )
  }
}

function validate(values) {
  return validator(values, v => {
    ['shipping', 'billing'].forEach(address =>
      v.validateChild(address, addressValidator => {
        addressValidator.validate('address1', 'city', 'state', 'zip').required()
      })
    )
  })
}

export default reduxForm({
  form: 'order',
  validate
})(Form)

