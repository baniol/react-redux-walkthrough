import fetchPlus from '../lib/fetchPlus'

export const fetchEmployees = () => {
  return dispatch => {
    dispatch(makeRequest())
    // @TODO to config
    return fetchPlus('http://localhost:3001/employees')
    .then(json => dispatch(returnEmployees(json)))
    .catch(err => {
      dispatch(requestError(err.toString()))
    })
  }
}

export const fetchPositions = () => {
  return dispatch => {
    dispatch(makeRequest())
    // @TODO to config
    return fetchPlus('http://localhost:3001/positions')
      .then(json => dispatch(returnPositions(json)))
      .catch(err => {
        dispatch(requestError(err.toString()))
      })
  }
}

export const setPositionFilter = (name) => {
  return {
    type: 'SET_POSITION_FILTER',
    name
  }
}

function makeRequest() {
  return {
    type: 'MAKE_REQUEST',
    loader: 'show'
  }
}

function returnEmployees(employees) {
  return {
    // @TODO change name, like in previous branches
    type: 'FETCH_EMPLOYEES',
    employees,
    loader: 'hide'
  }
}

function returnPositions(positions) {
  return {
    type: 'FETCH_POSITIONS',
    positions,
    loader: 'hide'
  }
}

function requestError(error) {
  return {
    type: 'REQUEST_ERROR',
    error,
    loader: 'hide'
  }
}
