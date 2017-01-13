import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

const initialState = {
  notifications: [{ email: 'foo@bar.com', id: 1 }]
}

function notifications(state = initialState, action) {
  const map = {
    CONCAT: () => ({
      notifications: [...state.notifications, ...action.notifications]
    })
  }

  return map[action.type] ? map[action.type]() : state
}

export default combineReducers({
  notifications,
  form
})
