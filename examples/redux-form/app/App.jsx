import React, { Component } from 'react'
import { connect } from 'react-redux'

import ReduxForm from './ReduxForm'
import * as actions from './actions'

export class App extends Component {
  render() {
    const { submit, saving } = this.props

    return (
      <div>
        <h1>Hello world!</h1>
        <ReduxForm
          onSubmit={submit}
          saving={saving}
        />
      </div>
    )
  }
}

export default connect(
  state => state.user,
  { submit: actions.submit })
(App)
