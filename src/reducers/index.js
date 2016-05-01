import { combineReducers } from 'redux'
import employees from './employees'
import positionFilter from './positionFilter'

export default combineReducers({
  employees,
  positionFilter
})
