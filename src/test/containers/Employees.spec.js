import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import { Employees, getEmployeeList } from '../../containers/Employees'
import EmployeeList from '../../components/EmployeeList'
import PositionFilter from '../../components/PositionFilter'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import employeeData from '../fixtures/employeesMocked'

let wrapper

// @TODO test componentDidMount - mount instead of shallow?

describe('Employees container', () => {
  beforeEach(() => {
    let props = {
      employees: employeeData,
      loader: false,
      errors: null,
      fetchEmployees: function (){}
    }
    wrapper = shallow(<Employees {...props} />)
  })
  it('Should have 4 children components', () => {
    expect(wrapper.children().length).toEqual(4)
  })
  it('Should render all components', () => {
    expect(wrapper.find(PositionFilter).length).toEqual(1)
    expect(wrapper.find(EmployeeList).length).toEqual(1)
    expect(wrapper.find(Loader).length).toEqual(1)
    expect(wrapper.find(Error).length).toEqual(1)
  });

  describe('Filtering employee list', () => {
    it('Should return the whole list if the filter is not specified', () => {
      expect(getEmployeeList(employeeData, null)).toEqual(employeeData)
    })
    it('Should filter the list by a filter', () => {
      expect(getEmployeeList(employeeData, 'Java Developer')).toEqual(
        [
          {
            'id': 2,
            'name': 'Cora Ashley',
            'position': 'Java Developer'
          }
        ]
      )
    })
  })

});
