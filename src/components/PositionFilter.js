import React, { PropTypes } from 'react'
import styles from '../styles/PositionFilter.css'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const PositionFilter = (props) => (
  <ul className={styles.filter}>
    {props.positions.map(position =>
      <li
        key={position}
        className={cx({active: props.currentFilter === position})}
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
