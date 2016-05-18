import { connect } from 'react-redux'
import { fetchEmployees, removeEmployee } from '../actions'
import EmployeeList from '../components/EmployeeList'

// @TODO - export for unit tests - necessary ?
export const getEmployeeList = (employees, position) => {
  if (position) {
    return employees.filter(p => p.position === position)
  }
  return employees
}

const mapStateToProps = (state) => {
  return {
    employees: getEmployeeList(state.employees, state.positionFilter),
    loader: state.loader,
    errors: state.errors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => {dispatch(fetchEmployees())},
    removeEmployee: (id) => {dispatch(removeEmployee(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList)
