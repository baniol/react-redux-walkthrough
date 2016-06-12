import React, { PropTypes } from 'react'
import { Link } from 'react-router'

import styles from '../styles/Menu.css'

const Menu = (props) => {
  return (
    <div className={styles.nav}>
      <ul>
        <li className={props.pathname === '/' ? styles.active : ''}><Link to='/'>Employee List</Link></li>
        <li className={props.pathname === '/addemployee' ? styles.active : ''}><Link to='/addemployee'>Add Employee</Link></li>
      </ul>
    </div>
  )
}

Menu.PropTypes = {
  pathname: PropTypes.string.isRequired
}

export default Menu
