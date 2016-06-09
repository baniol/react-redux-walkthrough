const errors = (state = [], action) => {
  const { type, error } = action
  if (type === 'REQUEST_ERROR') {
    state.push(error)
    return state
  }
  return state
}

export default errors
