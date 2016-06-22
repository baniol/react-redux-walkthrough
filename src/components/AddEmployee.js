import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { putEmployee, addEmployee, postEmployee, updateEmployee, fetchEmployees, fetchPositions } from '../actions'
import { browserHistory } from 'react-router'
import classNames from 'classnames/bind'
import styles from '../styles/Form.css'

const cx = classNames.bind(styles)

class AddEmployeeForm extends Component {

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
            // @TODO transit?
            browserHistory.push('/')
            resolve()
          }
        })
    })
  }

  render() {
    const { fields: { name, position }, error, resetForm, handleSubmit, submitting } = this.props
    return (
      <form className={styles.standardForm} onSubmit={handleSubmit(this.asyncValidate.bind(this))}>
        <div className={cx({'formElement': true,'error': name.touched && name.error})}>
          <label>First Name</label>
          {name.touched && name.error && <div className={styles.errorMessage}>{name.error}</div>}
          <input type="text" placeholder="First Name" {...name}/>
        </div>
        <div className={cx({'formElement': true,'error': position.touched && position.error})}>
          <label>Position</label>
          {position.touched && position.error && <div className={styles.errorMessage}>{position.error}</div>}
          <select {...position}>
            <option value="">-choose position-</option>
            {this.props.positions.map(pos =>
              <option key={pos}>
                {pos}
              </option>
            )}
          </select>
        </div>
        <div>
          <button type="submit" disabled={submitting}>
            {submitting ? 'Sending ...' : 'Submit'}
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
  else {
    initialValues = {name: '', position: ''}
  }
  return {
    positions: state.positions,
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
