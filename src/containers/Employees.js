import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchEmployees, removeEmployee, fetchPositions, setPositionFilter} from '../actions'  // @TODO webpack root settings
import EmployeeList from '../components/EmployeeList'
import PositionFilter from '../components/PositionFilter'

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
    currentFilter: state.positionFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => dispatch(fetchEmployees()),
    fetchPositions: () => dispatch(fetchPositions()),
    setPositionFilter: (name) => dispatch(setPositionFilter(name)),
    removeEmployee: (id) => {dispatch(removeEmployee(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees)
