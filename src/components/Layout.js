import React from 'react'
import Menu from './Menu'

export default (props) => {
  return (
    <div>
      <Menu />
      <div className="container">
        { props.children }
      </div>
    </div>
  )
}
