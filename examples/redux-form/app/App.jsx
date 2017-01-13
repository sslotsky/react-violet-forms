import React, { Component } from 'react'
import NotificationsForm from './Notifications'
import { connect } from 'react-redux'
import { submit } from './actions'

export class App extends Component {
  render() {
    const { onSubmit, saving, notifications } = this.props
    const initialValues = { notifications }

    return (
      <div className="soft">
        <NotificationsForm onSubmit={onSubmit} initialValues={initialValues} />
      </div>
    )
  }
}

export default connect(
  state => state.notifications,
  { onSubmit: submit })
(App)
