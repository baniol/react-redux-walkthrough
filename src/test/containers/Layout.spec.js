import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import { Layout, getEmployeeList } from '../../containers/Layout'
import Menu from '../../components/Menu'
import Loader from '../../components/Loader'
import Error from '../../components/Error'
import employeeData from '../fixtures/employeesMocked'


let wrapper

describe('Layout component', () => {
  beforeEach(() => {
    const location = {pathname: '/'}
    wrapper = shallow(<Layout location={location} />)
  })
  it('Should render the application', () => {
    expect(wrapper.find(Menu).length).toEqual(1)
  })
  it('Should render all components', () => {
    expect(wrapper.find(Loader).length).toEqual(1)
    expect(wrapper.find(Error).length).toEqual(1)
  })
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
})
