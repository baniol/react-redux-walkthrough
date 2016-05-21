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
    return fetch('http://localhost:3001/employees')
      .then(response => response.json())
      .then(json => {
        dispatch(returnEmployees(json))
      })
  }
}
