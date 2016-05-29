const loader = (state = false, action) => {
  switch(action.type) {
    case 'MAKE_REQUEST':
    case 'EMPLOYEES_LOADED':
    case 'REQUEST_ERROR':
    return action.loader
    default:
      return state
  }
}

export default loader
