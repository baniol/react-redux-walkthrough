import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import {reducer as formReducer} from 'redux-form';
import employees from './employees'
import positionFilter from './positionFilter'
import positions from './positions'
import loader from './loader'
import errors from './errors'

export default combineReducers({
  employees,
  positionFilter,
  routing: routerReducer,
  form: formReducer,
  positions,
  loader,
  errors
})
