import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styles from '../styles/EmployeeList.css'
import DeleteIcon from 'react-icons/lib/md/delete'
import EditIcon from 'react-icons/lib/md/mode-edit'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const EmployeeList = (props) => {
  return (
    <div className={styles.employees}>
      <ul>
      {props.employees.map(person =>
        <li key={person.id}>
          <div className={cx('info')}>
            <div className={cx('personName')}>{person.name}</div>
            <div className={cx('personPosition')}>{person.position}</div>
          </div>
          <div className={cx('icons')}>
            <Link to={`edit/${person.id}`}><EditIcon size={24} /></Link>
            <DeleteIcon size={24} style={{cursor: 'pointer'}} />
          </div>
        </li>
      )}
      </ul>
    </div>
  )
}

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default EmployeeList
