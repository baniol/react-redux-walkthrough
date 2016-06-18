import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchEmployees, fetchPositions, closeErrors } from '../actions'
import Menu from '../components/Menu'
import Loader from '../components/Loader'
import Error from '../components/Error'

import styles from '../styles/Container.css'

export class Layout extends Component {

  componentDidMount() {
    this.props.fetchEmployees()
    this.props.fetchPositions()
  }

  render() {
    return (
      <div className={styles.container} style={{opacity: this.props.loader ? 0.2 : 1}}>
        <Menu pathname={this.props.location.pathname} />
        <Error {...this.props} />
        <Loader loader={this.props.loader} />
        <div>
          {this.props.children && React.cloneElement(this.props.children, {
            employees: this.props.employees,
            positions: this.props.positions
          })}
        </div>
      </div>
    )
  }
}

export const getEmployeeList = (employees, position) => {
  if (position) {
    return employees.filter(p => p.position === position)
  }
  return employees
}

Layout.PropTypes = {
  children: PropTypes.node
}

const mapStateToProps = (state) => {
  return {
    employees: getEmployeeList(state.employees, state.positionFilter),
    positions: state.positions,
    errors: state.errors,
    loader: state.loader
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchEmployees: () => dispatch(fetchEmployees()),
    fetchPositions: () => dispatch(fetchPositions()),
    closeErrors: () => dispatch(closeErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)
