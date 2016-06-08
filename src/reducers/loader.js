export default (state = 0, action) => {
  if (action.loader === 'show') {
    state++
  }
  else if (action.loader === 'hide') {
    state--
  }
  if (state < 0) {
    state = 0
  }
  return state
}
