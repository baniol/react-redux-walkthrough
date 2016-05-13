import { combineReducers } from 'redux'
import employees from './employees'
import positionFilter from './positionFilter'
import loader from './loader'
import errors from './errors'

export default combineReducers({
  employees,
  positionFilter,
  loader,
  errors
})
