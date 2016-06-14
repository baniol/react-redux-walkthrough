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
