import { connect } from 'react-redux'
import { setPositionFilter } from '../actions'
import PositionFilter from '../components/PositionFilter'

const mapStateToProps = (state) => {
  return {
    positions: state.positions,
    currentFilter: state.positionFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterPositions: (name) => dispatch(setPositionFilter(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionFilter)
