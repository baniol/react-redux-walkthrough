import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'
import { fetchEmployees, addEmployee, saveEmployee, updateEmployee } from '../actions'
import EmployeeEdit from '../components/EmployeeEdit'

const asyncValidate = (values, dispatch, id ) => {
  return new Promise((resolve, reject) => {
    var promise = id ? dispatch(saveEmployee(values, id)) : dispatch(saveEmployee(values))
    promise.payload
      .then(response => response.json())
      .then(json => {
        if (json.errors) {
          reject(json.errors)
        }
        else {
          if (id) {
            dispatch(updateEmployee(json.data))
          }
          else {
            dispatch(addEmployee(json.data))
          }
          browserHistory.push('/')
          resolve()
        }
      })
  })
}

const mapStateToProps = (state, ownProps) => {
  let initialValues = null
  if (ownProps.params.id) {
    let employee = state.employees.filter(e => e.id == ownProps.params.id)
    initialValues = employee[0]
  }
  return {
    positions: state.positions,
    initialValues
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchEmployees: () => {dispatch(fetchEmployees())},
    onSubmit: (values, dispatch) => asyncValidate.call(null, values, dispatch, ownProps.params.id)
  }
}

export default reduxForm({
  form: 'addEmployee',
  fields: ['name', 'position']
}, mapStateToProps, mapDispatchToProps)(EmployeeEdit)
