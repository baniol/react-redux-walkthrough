import { FETCH_EMPLOYEES } from '../constants/ActionTypes'

export default (state=[], action) => {
  switch(action.type) {
    case FETCH_EMPLOYEES:
      return action.employees
    default:
      return state
  }
}
