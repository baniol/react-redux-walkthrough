import React, {PropTypes} from 'react'
import Menu from './Menu'

import styles from '../styles/Container.css'

const Layout = (props) => {
  return (
    <div className={styles.container}>
      <Menu />
      <div>
        { props.children }
      </div>
    </div>
  )
}

Layout.PropTypes = {
  children: PropTypes.node
}

export default Layout
