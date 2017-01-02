import { SUBMIT, SUCCESS } from './reducer'
import { reset } from 'redux-form'

export function submit() {
  return dispatch => {
    dispatch({ type: SUBMIT })
    return Promise.resolve().then(() => {
      setTimeout(() => {
        dispatch({ type: SUCCESS })
        dispatch(reset('newUser'))
      }, 1500)
    })
  }
}
