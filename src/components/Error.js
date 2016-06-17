import React, { PropTypes } from 'react'
import classNames from 'classnames/bind'
import styles from '../styles/Error.css'
import CloseIcon from 'react-icons/lib/md/cancel'

const cx = classNames.bind(styles)

const Error = (props) => {
  let errorMsg = ''
  if (props.errors.length > 0) {
    errorMsg = (
      <ul>
        <CloseIcon
          className={styles.close}
          size={20}
          onClick={props.closeErrors}
        />
        {props.errors.map((e, i) => <li key={i}>{e}</li>)}
      </ul>
    )
  }
  return (
    <div className={cx('error')} style={{display: props.errors.length > 0 ? 'block' : 'none'}}>
      {errorMsg}
    </div>
  )
}

Error.PropTypes = {
  errors: PropTypes.string,
  closeErrors: PropTypes.func.isRequired
}

export default Error
