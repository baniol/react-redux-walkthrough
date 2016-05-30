import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducers'
import Layout from './components/Layout'
import Employees from './components/Employees'
import EmployeeEditContainer from './containers/EmployeeEditContainer'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()
const logger = createLogger()
const store = createStore(reducers, applyMiddleware(thunk, logger))
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={ Employees }/>
        <Route path="addemployee" component={EmployeeEditContainer}/>
        <Route path="employee/:id" component={EmployeeEditContainer}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
