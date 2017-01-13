import React from 'react'
import { connect } from 'react-redux'
import { reduxForm, Field, FieldArray } from 'redux-form'
import { FormInput, Save } from 'react-violet-forms'

const notification = (member, index, fields) => {
  return (
    <div key={index}>
      <Field
        name={`${member}.email`}
        component={FormInput}
        label="Email Address"
      />
      <Field
        name={`${member}.id`}
        component="hidden"
      />
    </div>
  )
}

const renderNotifications = ({ fields }) => {
  return (
    <div className="row">
      {fields.map(notification)}
    </div>
  )
}

export function Form({ array, handleSubmit, ...rest }) {
  const addNotification = () => array.push('notifications', { email: 'bob@example.com' })

  return (
    <form onSubmit={handleSubmit}>
      <FieldArray
        name="notifications"
        component={renderNotifications}
      />
      <button type="button" onClick={addNotification}>Add Notification</button>
      <Save {...rest} />
    </form>
  )
}

export default reduxForm({
  form: 'notifications',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(Form)
