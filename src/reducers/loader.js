const loader = (state = false, action) => {
  switch(action.type) {
    case 'MAKE_REQUEST':
    case 'FETCH_EMPLOYEES':
    return action.loader
    default:
      return state
  }
}

export default loader
