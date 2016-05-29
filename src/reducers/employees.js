export default (state=[], action) => {
  switch(action.type) {
    case 'EMPLOYEES_LOADED':
      return action.employees
    case 'ADD_EMPLOYEE':
      return [...state, action.employee]
      case 'UPDATE_EMPLOYEE':
        return action.employees
    default:
      return state
  }
}
