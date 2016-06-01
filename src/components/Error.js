import React, { PropTypes } from 'react'

const Error = (props) => {
  let errorMsg = props.error ? <div className="error-msg">{this.props.error}</div> : ''
  return (
    <div>
      {errorMsg}
    </div>
  )
}

// @TODO PropTypes not working for funtional components?
// Error.PropTypes = {
//   loader: PropTypes.bool.isRequired
// }

export default Error
