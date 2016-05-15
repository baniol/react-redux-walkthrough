import React, { Component, PropTypes } from 'react'
import { reduxForm } from 'redux-form'
import { sendEmployee, addEmployee } from '../actions'

const asyncValidate = (values, dispatch) => {

  return new Promise((resolve, reject) => {

    var promise = dispatch(sendEmployee(values))
    promise.payload
      .then(response => response.json())
      .then(json => {
        if (json.errors) {
          reject(json.errors)
        }
        else {
          dispatch(addEmployee(json.data))
          resolve()
        }
      })
  })
}

class SimpleForm extends Component {
  render() {
    const { fields: { name, position }, error, resetForm, handleSubmit, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(asyncValidate)}>
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

const mapStateToProps = (state) => {
  // @TODO description
  if (state.positions[0] !== '-choose position-') {
    state.positions.unshift('-choose position-')
  }
  return {
    positions: state.positions
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSubmit (data) {
//       dispatch(sendEmployee(data))
//     }
//   }
// }

SimpleForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'addEmployee',
  fields: ['name', 'position']
}, mapStateToProps, null )(SimpleForm)
