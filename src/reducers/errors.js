import { REQUEST_ERROR, CLOSE_ERRORS } from '../constants/ActionTypes'

const errors = (state = [], action) => {
  const { type, error } = action
  switch(type) {
    case REQUEST_ERROR:
      state.push(error)
      return state
    case CLOSE_ERRORS:
      return []
    default:
      return state
  }
}

export default errors
