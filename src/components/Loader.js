import React, { PropTypes } from 'react'

const Loader = (props) => {
  let loader = props.loader ? <div className="loader">Loading ...</div> : ''
  return (
    <div>
      {loader}
    </div>
  )
}

Loader.PropTypes = {
  loader: PropTypes.bool.isRequired
}

export default Loader
