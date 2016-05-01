import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setPositionFilter } from '../actions'

class PositionFilter extends Component { // class?

  render() {
    let spanStyle = (pos) => {
      let s = {
        marginRight: 10,
        cursor: 'pointer'
      }
      if (pos === this.props.currentFilter) {
        s['backgroundColor'] = 'grey'
      }
      // @TODO ugly - refactor
      return s
    }
    return (
      <div>
        {this.props.positions.map(position =>
          <span
            key={position}
            style={spanStyle(position)}
            onClick={this.props.filterPositions.bind(null, position)}
            >
            {position}
          </span>
        )}
      </div>
    )
  }
}

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
