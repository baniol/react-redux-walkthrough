import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchEmployees } from '../actions'

export class EmployeeList extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchEmployees()
  }

  render () {
    let loader = this.props.loader ? <div className="loader">Loading ...</div> : ''
    return (
      <div>
        {loader}
        <ul>
          {this.props.employees.map(person =>
            <li key={person.id}>
              {person.name} - {person.position}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
  }).isRequired).isRequired,
  loader: PropTypes.bool
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
    loader: state.loader
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => {dispatch(fetchEmployees())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList)
