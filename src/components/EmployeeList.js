import React from 'react'
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

EmployeeList.propTypes = {
  // @TODO complete
}

export default connect(mapStateToProps)(EmployeeList)
