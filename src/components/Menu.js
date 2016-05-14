import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <div>
      <ul className="menu">
        <li><Link to='/'>Employee List</Link></li>
        <li><Link to='addemployee'>Add Employee</Link></li>
      </ul>
    </div>
  )
}
