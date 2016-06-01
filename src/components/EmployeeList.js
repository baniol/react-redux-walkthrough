import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchEmployees } from '../actions'

export class EmployeeList extends Component {

  // @TODO props as params, constructor at all?
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchEmployees()
  }

  render () {
    let loader = this.props.loader ? <div className="loader">Loading ...</div> : ''
    let errorMsg = this.props.errors ? <div className="error-msg">{this.props.errors}</div> : ''
    return (
      <div>
        {loader}
        {errorMsg}
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
  loader: PropTypes.bool,
  errors: PropTypes.string,
  fetchEmployees: PropTypes.func.isRequired
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
    loader: state.loader,
    errors: state.errors,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => dispatch(fetchEmployees())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList)
