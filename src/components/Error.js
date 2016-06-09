import React, { PropTypes } from 'react'

const Error = (props) => {
  let errorMsg = ''
  if (props.error.length > 0) {
    errorMsg = <ul> {props.error.map((e, i) => <li key={i}>{e}</li>)} </ul>
  }
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
