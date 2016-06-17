import request from '../lib/Require'
import * as types from '../constants/ActionTypes'
import config from '../config'

export const fetchEmployees = () => {
  return dispatch => {
    dispatch(makeRequest())
    return request(`${config.apiServerUrl}/employees`)
    .then(json => dispatch(returnEmployees(json)))
    .catch(err => {
      dispatch(requestError(err.toString()))
    })
  }
}

export const putEmployee = (data) => {
  const fetchEmployee = fetch(`${config.apiServerUrl}/employee`, {
    method: 'PUT',
    // @TODO - to Request.js
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
  const fetchEmployee = fetch(`${config.apiServerUrl}/employee/${id}`, {
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
    return fetch(`${config.apiServerUrl}/employee/${id}`, {
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

export const fetchPositions = () => {
  return dispatch => {
    dispatch(makeRequest())
    return request(`${config.apiServerUrl}/positions`)
      .then(json => dispatch(returnPositions(json)))
      .catch(err => {
        dispatch(requestError(err.toString()))
      })
  }
}

export const setPositionFilter = (name) => {
  return {
    type: types.SET_POSITION_FILTER,
    name
  }
}

export const closeErrors = () => {
  return {
    type: types.CLOSE_ERRORS
  }
}

function makeRequest() {
  return {
    type: types.MAKE_REQUEST,
    loader: 'show'
  }
}

function returnEmployees(employees) {
  return {
    type: types.RETURN_EMPLOYEES,
    employees,
    loader: 'hide'
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

function returnPositions(positions) {
  return {
    type: types.RETURN_POSITIONS,
    positions,
    loader: 'hide'
  }
}

function requestError(error) {
  return {
    type: types.REQUEST_ERROR,
    error,
    loader: 'hide'
  }
}
