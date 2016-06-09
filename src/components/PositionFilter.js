import React, { PropTypes } from 'react';

// @TODO different way - classnames, module's css ?
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

const PositionFilter = (props) => (
  <ul>
    {props.positions.map(position =>
      <li
        key={position}
        style={spanStyle(position, props.currentFilter)}
        onClick={props.setPositionFilter.bind(null, position)}
        >
        {position}
      </li>
    )}
  </ul>
)

PositionFilter.PropTypes = {
  positions: PropTypes.array.isRequired,
  currentFilter: PropTypes.string.isRequired,
  setPositionFilter: PropTypes.func.isRequired
}

export default PositionFilter
