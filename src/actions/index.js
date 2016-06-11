import fetchPlus from '../lib/fetchPlus' // @TODO change name
import * as types from '../constants/ActionTypes'

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
    // @TODO change name, like in previous branches
    type: types.FETCH_EMPLOYEES,
    employees,
    loader: 'hide'
  }
}

function returnPositions(positions) {
  return {
    type: types.FETCH_POSITIONS,
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
