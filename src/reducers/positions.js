import { RETURN_POSITIONS } from '../constants/ActionTypes'

export default (state=[], action) => {
  switch(action.type) {
    case RETURN_POSITIONS:
      return action.positions
    default:
      return state
  }
}
