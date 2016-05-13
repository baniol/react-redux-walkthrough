const errors = (state = null, action) => {
  const { type, error } = action
  if (type === 'REQUEST_ERROR') {
    return error
  }
  return state
}

export default errors
