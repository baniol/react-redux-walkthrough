import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import Layout from './components/Layout'
import Employees from './components/Employees'
import AddEmployee from './components/AddEmployee'
import logger from './middleware/simple-logger'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const store = createStore(reducers, applyMiddleware(thunk))
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Layout}>
        <IndexRoute component={ Employees }/>
        <Route path="addemployee" component={AddEmployee}/>
        <Route path="employee/:id" component={AddEmployee}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
