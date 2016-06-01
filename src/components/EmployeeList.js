import React, { PropTypes } from 'react'

const EmployeeList = (props) => {
  return (
    <div>
      <ul>
      {props.employees.map(person =>
        <li key={person.id}>
          {person.name} - {person.position}
        </li>
      )}
      </ul>
    </div>
  )
}

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default EmployeeList
