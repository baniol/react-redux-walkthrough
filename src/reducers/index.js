import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form';
import employees from './employees'
import positions from './positions'
import positionFilter from './positionFilter'
import loader from './loader'
import errors from './errors'

export default combineReducers({
  employees,
  positions,
  positionFilter,
  routing: routerReducer,
  form: formReducer,
  positions,
  loader,
  errors
})
