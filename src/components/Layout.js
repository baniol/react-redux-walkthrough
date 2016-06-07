import React from 'react'
import Menu from './Menu'

const Layout = (props) => {
  return (
    <div>
      <Menu />
      <div className="container">
        { props.children }
      </div>
    </div>
  )
}

// @TODO
// Layout.propTypes = {
//   children ...
// }

export default Layout
