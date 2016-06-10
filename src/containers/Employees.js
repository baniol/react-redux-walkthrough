import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchEmployees, fetchPositions, setPositionFilter } from '../actions'
import EmployeeList from '../components/EmployeeList'
import PositionFilter from '../components/PositionFilter'
import Loader from '../components/Loader'
import Error from '../components/Error'

export class Employees extends Component {

  componentDidMount() {
    if (this.props.employees.length === 0) {
      this.fetchData()
    }
  }

  fetchData() {
    this.props.fetchPositions()
    this.props.fetchEmployees()
  }

  render() {
    return (
      <div>
        <PositionFilter {...this.props} />
        <Error error={this.props.errors} />
        <Loader loader={this.props.loader} />
        <EmployeeList {...this.props} />
      </div>
    )
  }
}

export const getEmployeeList = (employees, position) => {
  if (position) {
    return employees.filter(p => p.position === position)
  }
  return employees
}

const mapStateToProps = (state) => {
  return {
    employees: getEmployeeList(state.employees, state.positionFilter),
    positions: state.positions,
    currentFilter: state.positionFilter,
    errors: state.errors,
    loader: state.loader
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => dispatch(fetchEmployees()),
    fetchPositions: () => dispatch(fetchPositions()),
    setPositionFilter: (name) => dispatch(setPositionFilter(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees)
