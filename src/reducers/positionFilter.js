import { SET_POSITION_FILTER } from '../constants/ActionTypes'

export default (state=null, action) => {
  switch(action.type) {
    case SET_POSITION_FILTER:
      if (!state || state !== action.name) {
        return action.name
      } else {
        return null
      }
    default:
      return state
  }
}
