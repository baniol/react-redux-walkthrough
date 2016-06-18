import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import { Employees } from '../../containers/Employees'
import EmployeeList from '../../components/EmployeeList'
import PositionFilter from '../../components/PositionFilter'
import employeeData from '../fixtures/employeesMocked'

let wrapper

describe('Employees container', () => {
  beforeEach(() => {
    let props = {
      loader: false,
      errors: null,
      fetchEmployees: function (){}
    }
    wrapper = shallow(<Employees {...props} />)
  })
  it('Should have 4 children components', () => {
    expect(wrapper.children().length).toEqual(2)
  })
  it('Should render all components', () => {
    expect(wrapper.find(PositionFilter).length).toEqual(1)
    expect(wrapper.find(EmployeeList).length).toEqual(1)
  })

})
