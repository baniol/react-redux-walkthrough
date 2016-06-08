export default (state=[], action) => {
  switch(action.type) {
    case 'FETCH_POSITIONS':
      return action.positions
    default:
      return state
  }
}
