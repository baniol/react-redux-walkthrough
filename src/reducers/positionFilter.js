export default (state=null, action) => {
  switch(action.type) {
    case 'SET_POSITION_FILTER':
      if (!state || state !== action.name) {
        return action.name
      } else {
        return null
      }
    default:
      return state
  }
}
