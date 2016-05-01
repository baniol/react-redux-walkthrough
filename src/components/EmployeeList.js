import React, { Component } from 'react'
import { connect } from 'react-redux'

class EmployeeList extends Component { // class ?

  render() {
    return (
      <ul>
        {this.props.employees.map(person =>
          <li key={person.id}>
            {person.name} - {person.position}
          </li>
        )}
      </ul>
    );
  }
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
