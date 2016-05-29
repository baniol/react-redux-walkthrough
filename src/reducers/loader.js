const loader = (state = false, action) => {
  switch(action.type) {
    case 'MAKE_REQUEST':
    case 'EMPLOYEES_LOADED':
    return action.loader
    default:
      return state
  }
}

export default loader
