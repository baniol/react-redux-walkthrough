import React, { PropTypes } from 'react';
import { connect } from 'react-redux'
import { setPositionFilter } from '../actions'

let spanStyle = (pos, currentFilter) => {
  let style = {
    cursor: 'pointer',
    padding: '3px 5px'
  }
  if (pos === currentFilter) {
    style.backgroundColor = 'silver'
  }
  return style
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

PositionFilter.propTypes = {
  positions: PropTypes.array.isRequired,
  filterPositions: PropTypes.func.isRequired
}

const positionList = ['Software Architect', 'Web Developer', 'Java Developer', 'Project Manager'] // @TODO - to a separate state object (reducer)

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
