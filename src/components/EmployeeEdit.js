import React, { Component, PropTypes } from 'react'
import { addEmployee, saveEmployee, updateEmployee } from '../actions'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class EmployeeEdit extends Component {

  // @TODO ?
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    if (this.props.params.id) {
      this.props.fetchEmployees()
    }
  }

  handleChange(event, index, value) {
    this.props.fields.position.autofill(value)
  }

  render() {
    // @TODO - called 3 times - immutable
    const { fields: { name, position }, error, resetForm, handleSubmit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit}>
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

EmployeeEdit.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default EmployeeEdit
