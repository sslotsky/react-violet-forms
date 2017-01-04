import React, { Component } from 'react'
import { connect } from 'react-redux'
import CodeMirror from 'react-codemirror'
import 'codemirror/mode/jsx/jsx'

import SignUp from './SignUp'
import * as actions from './actions'

import signUpCode from 'raw!../codeSamples/SignUp.txt'

const config = {
  mode: 'javascript',
  theme: 'erlang-dark',
  readOnly: true
}

export class App extends Component {
  render() {
    const { submit, saving } = this.props

    return (
      <div className="soft">
        <h1 className="soft-quarter">Signup Form</h1>
        <div className="row">
          <div className="col-1">
            <SignUp
              onSubmit={submit}
              saving={saving}
            />
          </div>
          <div className="col-1 right">
            <CodeMirror options={config} value={signUpCode} />
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state => state.user,
  { submit: actions.submit })
(App)
