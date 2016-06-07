import React, { PropTypes } from 'react'

const Error = (props) => {
  let errorMsg = props.error ? <div className="error-msg">{props.error}</div> : ''
  return (
    <div>
      {errorMsg}
    </div>
  )
}

Error.PropTypes = {
  error: PropTypes.string
}

export default Error
