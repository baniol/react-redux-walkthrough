import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import employees from './employees'
import positionFilter from './positionFilter'
import loader from './loader'
import errors from './errors'

export default combineReducers({
  employees,
  positionFilter,
  routing: routerReducer,
  loader,
  errors
})
