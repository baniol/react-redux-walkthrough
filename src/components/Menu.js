import React from 'react'
import { Link } from 'react-router'

import styles from '../styles/Menu.css'

export default (props) => {
  return (
    <div className={styles.nav}>
      <ul>
        <li><Link to='/'>Employee List</Link></li>
        <li><Link to='addemployee'>Add Employee</Link></li>
      </ul>
    </div>
  )
}
