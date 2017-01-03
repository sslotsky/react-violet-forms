import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {
  loadTranslations,
  setLocale,
  syncTranslationWithStore,
} from 'react-redux-i18n'
import translations from './translations'

import { Provider } from 'react-redux'
import reducer from './reducer'

import App from './App'

const store = createStore(reducer, applyMiddleware(thunk))

syncTranslationWithStore(store)
store.dispatch(loadTranslations(translations))
store.dispatch(setLocale('en'))

ReactDOM.render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'))
