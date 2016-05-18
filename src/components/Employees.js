import React from 'react'
import EmployeeList from '../containers/EmployeeListContainer'
import PositionFilter from '../containers/PositionFilterContainer'

const App = () => (
  <div>
    <PositionFilter />
    <EmployeeList />
  </div>
)

export default App
