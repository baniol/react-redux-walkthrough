import { RETURN_EMPLOYEES } from '../constants/ActionTypes'

export default (state=[], action) => {
  switch(action.type) {
    case RETURN_EMPLOYEES:
      return action.employees
    case 'ADD_EMPLOYEE':
      return [...state, action.employee]
      case 'UPDATE_EMPLOYEE':
        return action.employees
    default:
      return state
  }
}
