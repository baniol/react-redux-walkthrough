import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchEmployees, setPositionFilter } from '../actions'
import EmployeeList from '../components/EmployeeList'
import PositionFilter from '../components/PositionFilter'
import Loader from '../components/Loader'
import Error from '../components/Error'

export class Employees extends Component {

  componentDidMount() {
    this.props.fetchEmployees()
  }

  render() {
    return (
      <div>
        <PositionFilter {...this.props} />
        <Error error={this.props.error} />
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
    loader: state.loader
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => dispatch(fetchEmployees()),
    setPositionFilter: (name) => dispatch(setPositionFilter(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees)
