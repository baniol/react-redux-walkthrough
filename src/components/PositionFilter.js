import React, { PropTypes } from 'react';

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

export default PositionFilter
