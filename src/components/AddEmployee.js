import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { putEmployee, addEmployee, postEmployee, updateEmployee, fetchEmployees, fetchPositions } from '../actions'
import { browserHistory } from 'react-router'

class AddEmployeeForm extends Component {

  componentWillMount() {
    if (this.props.employees.length === 0) {
      this.props.fetchEmployees()
    }
    if (this.props.positions.length === 0) {
      this.props.fetchPositions()
    }
  }

  asyncValidate (values, dispatch) {
    return new Promise((resolve, reject) => {
      var promise = this.props.params.id ? dispatch(postEmployee(values, this.props.params.id)) : dispatch(putEmployee(values))
      promise.payload
        .then(response => response.json())
        .then(json => {
          if (json.errors) {
            reject(json.errors)
          }
          else {
            if (this.props.params.id) {
              dispatch(updateEmployee(json.data))
            }
            else {
              dispatch(addEmployee(json.data))
            }
            browserHistory.push('/')
            resolve()
          }
        })
    })
  }

  render() {
    const { fields: { name, position }, error, resetForm, handleSubmit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(this.asyncValidate.bind(this))}>
        {error && <div>{error}</div>}
        <div>
          <label>First Name</label>
          <div>
            <input type="text" placeholder="First Name" {...name}/>
          </div>
          {name.touched && name.error && <div>{name.error}</div>}
        </div>
        <div>
          <label>Position</label>
          <div>
            <select {...position}>
              <option value="">--choose position--</option>
              {this.props.positions.map(pos =>
                <option key={pos}>
                  {pos}
                </option>
              )}
            </select>
            {position.touched && position.error && <div>{position.error}</div>}
          </div>
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Submit
          </button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let initialValues = null
  if (ownProps.params.id) {
    let employee = state.employees.filter(e => e.id == ownProps.params.id)
    initialValues = employee[0]
  }
  return {
    positions: state.positions,
    employees: state.employees,
    initialValues
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => {dispatch(fetchEmployees())},
    fetchPositions: () => {dispatch(fetchPositions())}
  }
}

AddEmployeeForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'addEmployee',
  fields: ['name', 'position']
}, mapStateToProps, mapDispatchToProps )(AddEmployeeForm)
