import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import App from './components/App'
import logger from './middleware/simple-logger'

const store = createStore(reducers, applyMiddleware(thunk, logger))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
