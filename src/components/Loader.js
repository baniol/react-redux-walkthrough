import React, { PropTypes } from 'react'
import classNames from 'classnames/bind'
import styles from '../styles/Loader.css'

const cx = classNames.bind(styles)

const Loader = (props) => {
  // let loader = props.loader ? <div className={cx('loader')}><Spinner /></div> : ''
  let loader = ''
  console.log(props.loader);
  if (props.loader) {
    loader = <div className={cx('loader-wrapper')}><div className={cx('loader')}>Loading ...</div></div>
  }
  return (
    <div>
      {loader}
    </div>
  )
}

Loader.PropTypes = {
  loader: PropTypes.bool.isRequired
}

export default Loader
