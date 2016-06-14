import React, {PropTypes} from 'react'
import { connect } from 'react-redux'
import { closeErrors } from '../actions'
import Menu from '../components/Menu'
import Loader from '../components/Loader'
import Error from '../components/Error'

import styles from '../styles/Container.css'

export const Layout = (props) => {
  return (
    <div className={styles.container} style={{opacity: props.loader ? 0.2 : 1}}>
      <Menu pathname={props.location.pathname} />
      <Error {...props} />
      <Loader loader={props.loader} />
      <div>
        { props.children }
      </div>
    </div>
  )
}

Layout.PropTypes = {
  children: PropTypes.node
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors,
    loader: state.loader
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeErrors: () => dispatch(closeErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
