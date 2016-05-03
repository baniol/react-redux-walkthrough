import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

const EmployeeList = ({employees}) => (
  <ul>
    {employees.map(person =>
      <li key={person.id}>
        {person.name} - {person.position}
      </li>
    )}
  </ul>
)

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}

const getEmployeeList = (employees, position) => {
  if (position) {
    return employees.filter(p => p.position === position)
  }
  return employees
}

const mapStateToProps = (state) => {
  return {
    employees: getEmployeeList(state.employees, state.positionFilter)
  }
}

export default connect(mapStateToProps)(EmployeeList)
