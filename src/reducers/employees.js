import { RETURN_EMPLOYEES } from '../constants/ActionTypes'

export default (state=[], action) => {
  switch(action.type) {
    case RETURN_EMPLOYEES:
      return action.employees
    default:
      return state
  }
}
