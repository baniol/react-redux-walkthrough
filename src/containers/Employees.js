import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchEmployees, fetchPositions, setPositionFilter, closeErrors } from '../actions'
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
      <div style={{opacity: this.props.loader ? 0.2 : 1}}>
        <PositionFilter {...this.props} />
        <Error {...this.props} />
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
    setPositionFilter: (name) => dispatch(setPositionFilter(name)),
    closeErrors: () => dispatch(closeErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees)
