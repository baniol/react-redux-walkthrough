// import api from './middleware/api'
import fetch from 'isomorphic-fetch'

export const fetchEmployees = () => {
  return dispatch => {
    dispatch(makeRequest())
    return fetch('http://localhost:3001/employees')
      .then(response => response.json())
      .then(json => dispatch(returnEmployees(json)))
      .catch((err) => dispatch(requestError(err.toString())))
  }
}

export const setPositionFilter = (name) => {
  return {
    type: 'SET_POSITION_FILTER',
    name
  }
}

export const putEmployee = (data) => {
  const fetchEmployee = fetch('http://localhost:3001/employee', {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return {
    type: 'VALIDATE_EMPLOYEE', // @TODO - not used by reducers ?
    payload: fetchEmployee // @TODO name payload ?
  }
}

export const postEmployee = (data, id) => {
  const fetchEmployee = fetch(`http://localhost:3001/employee/${id}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  return {
    type: 'VALIDATE_EMPLOYEE', // @TODO - not used by reducers ?
    payload: fetchEmployee // @TODO name payload ?
  }
}

export const removeEmployee = (id) => {
  return dispatch => {
    // dispatch(makeRequest())
    return fetch(`http://localhost:3001/employee/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => {
      dispatch(fetchEmployees(json.data))
    })
  }
}

function makeRequest() {
  return {
    type: 'MAKE_REQUEST',
    loader: true
  }
}

export const addEmployee = (employee) => {
  return {
    type: 'ADD_EMPLOYEE',
    employee
  }
}

export const updateEmployee = (employees) => {
  return {
    type: 'UPDATE_EMPLOYEE',
    employees
  }
}

function fieldError(errors) {
  return {
    type: 'FIELD_ERROR',
    errors: errors
  }
}

function returnEmployees(employees) {
  return {
    type: 'FETCH_EMPLOYEES',
    employees,
    loader: false
  }
}
