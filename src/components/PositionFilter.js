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

export default (props) => (
  <div>
    {props.positions.map(position =>
      <span
        key={position}
        style={spanStyle(position, props.currentFilter)}
        onClick={props.setPositionFilter.bind(null, position)}
        >
        {position}
      </span>
    )}
  </div>
)
