import React from 'react';
import { connect } from 'react-redux'
import { setPositionFilter } from '../actions'

let spanStyle = (pos, currentFilter) => {
  let s = {
    marginRight: 10,
    cursor: 'pointer'
  }
  if (pos === currentFilter) {
    s['backgroundColor'] = 'grey'
  }
  // @TODO ugly - refactor
  return s
}

const PositionFilter = ({positions, currentFilter, filterPositions}) => (
  <div>
    {positions.map(position =>
      <span
        key={position}
        style={spanStyle(position, currentFilter)}
        onClick={filterPositions.bind(null, position)}
        >
        {position}
      </span>
    )}
  </div>
)

const positionList = ['Architect', 'Dev'] // @TODO - to a separate state object (reducer)

const mapStateToProps = (state) => {
  return {
    positions: positionList,
    currentFilter: state.positionFilter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filterPositions: (name) => dispatch(setPositionFilter(name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionFilter)
