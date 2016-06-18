import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setPositionFilter} from '../actions'
import EmployeeList from '../components/EmployeeList'
import PositionFilter from '../components/PositionFilter'

export class Employees extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <PositionFilter {...this.props} />
        <EmployeeList {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentFilter: state.positionFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setPositionFilter: (name) => dispatch(setPositionFilter(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees)
