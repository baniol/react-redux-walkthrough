export default (state=[], action) => {
  switch(action.type) {
    case 'EMPLOYEES_LOADED':
      return action.employees
    default:
      return state
  }
}
