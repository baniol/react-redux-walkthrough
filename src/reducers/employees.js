export default (state=[], action) => {
  switch(action.type) {
    case 'FETCH_PEOPLE':
      return action.people
    default:
      return state
  }
}
