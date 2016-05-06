import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const Counter = ({employeeCount}) => (
  <div>{employeeCount}</div>
)

Counter.propTypes = {
  employeeCount: PropTypes.number.isRequired
}

const countEmployees = (state) => {
  if (state.positionFilter) {
    return state.employees.filter(p => p.position === state.positionFilter).length
  }
  return state.employees.length
}

const mapStateToProps = (state) => {
  return {
    employeeCount: countEmployees(state)
  }
}

export default connect(mapStateToProps)(Counter)
