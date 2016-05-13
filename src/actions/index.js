import fetch from 'isomorphic-fetch'

export const setPositionFilter = (name) => {
  return {
    type: 'SET_POSITION_FILTER',
    name
  }
}

function makeRequest() {
  return {
    type: 'MAKE_REQUEST',
    loader: true
  }
}

function requestError(error) {
  return {
    type: 'REQUEST_ERROR',
    error,
    loader: false
  }
}

function returnEmployees(employees) {
  return {
    type: 'FETCH_EMPLOYEES',
    employees,
    loader: false
  }
}

export const fetchEmployees = () => {
  return dispatch => {
    dispatch(makeRequest())
    return fetch('http://localhost:3001')
      .then(response => response.json())
      .then(json => dispatch(returnEmployees(json)))
      .catch((err) => dispatch(requestError(err.toString())))
  }
}
