import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { putEmployee, addEmployee, postEmployee, updateEmployee, fetchEmployees } from '../actions'
import { browserHistory } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class AddEmployeeForm extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    if (this.props.params.id) {
      this.props.fetchEmployees()
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

  handleChange(event, index, value) {
    this.props.fields.position.autofill(value)
  }

  render() {
    const { fields: { name, position }, error, resetForm, handleSubmit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(this.asyncValidate.bind(this))}>
        {error && <div>{error}</div>}
        <div>
          <TextField
            hintText="First name"
            floatingLabelText="First name"
            errorText={name.touched && name.error && name.error}
            {...name}
          />
        </div>
        <div>
          <SelectField
            floatingLabelText="Position"
            errorText={position.touched && position.error && position.error}
            {...position}
            onChange={this.handleChange}
          >
              {this.props.positions.map(pos =>
                <MenuItem key={pos} value={pos} primaryText={pos} />
              )}
          </SelectField>
        </div>
        <div>
          <RaisedButton type="submit" disabled={submitting}>
            {submitting ? <i/> : <i/>} Submit
          </RaisedButton>
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
  // @TODO description
  if (state.positions[0] !== '-choose position-') {
    state.positions.unshift('-choose position-')
  }
  return {
    positions: state.positions,
    initialValues
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => {dispatch(fetchEmployees())}
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
