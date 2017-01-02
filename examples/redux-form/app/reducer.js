import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

export const SUBMIT = 'user/SUBMIT'
export const SUCCESS = 'user/SUCCESS'

const initialState = { saving: false }

function reducer(state = initialState, action) {
  const map = {
    [SUBMIT]: () => ({ saving: true }),
    [SUCCESS]: () => initialState
  }

  return map[action.type] ? map[action.type]() : state
}

export default combineReducers({ form, user: reducer })
