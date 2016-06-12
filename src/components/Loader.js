import React, { PropTypes } from 'react'
import classNames from 'classnames/bind'
import styles from '../styles/Loader.css'

const cx = classNames.bind(styles)

const Loader = (props) => {
  let loader = ''
  if (props.loader) {
    loader = <div className={cx('loader')}>Loading ...</div>
  }
  return (
    <div className={cx('loaderWrapper')} style={{display: props.loader ? 'block' : 'none'}}>
      {loader}
    </div>
  )
}

Loader.PropTypes = {
  loader: PropTypes.bool.isRequired
}

export default Loader
