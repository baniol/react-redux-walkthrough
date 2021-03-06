import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducers'
import Layout from './containers/Layout'
import Employees from './containers/Employees'
import AddEmployee from './components/AddEmployee'

const logger = createLogger()
const store = createStore(reducers, applyMiddleware(thunk, logger))
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Employees}/>
        <Route path="addemployee" component={AddEmployee}/>
        <Route path="edit/:id" component={AddEmployee}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
