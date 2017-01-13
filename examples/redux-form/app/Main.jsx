import React from 'react'
import ReactDOM from 'react-dom'
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { Provider } from 'react-redux'
import reducer from './reducer'

import App from './App'
import DevTools from './DevTools'
import './styles.scss'
import { create } from './actions'

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), DevTools.instrument())
)

ReactDOM.render((
  <Provider store={store}>
    <div>
      <DevTools />
      <App />
    </div>
  </Provider>
), document.getElementById('app'))
