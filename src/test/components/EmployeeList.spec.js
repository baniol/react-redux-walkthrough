import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import { EmployeeList, getEmployeeList } from '../../components/EmployeeList'

let wrapper
let employeeData = [
  {
    'id': 1,
    'name': 'Reese Hardin',
    'position': 'Web Developer'
  },
  {
    'id': 2,
    'name': 'Cora Ashley',
    'position': 'Java Developer'
  }
]

describe('EmployeeList component', () => {
  beforeEach(() => {
    let props = {
      employees: employeeData
    }
    wrapper = shallow(<EmployeeList {...props} />)
  })
  it('Should render the ul and li elements', () => {
    expect(wrapper.find('ul').length).toEqual(1)
    expect(wrapper.find('li').length).toEqual(2)
  });
  it('Should render employee data in the first li as text', () => {
    expect(wrapper.find('li').first().text()).toEqual('Reese Hardin - Web Developer')
  });
  it('Should render employee data in the second li as text', () => {
    expect(wrapper.find('li').at(1).text()).toEqual('Cora Ashley - Java Developer')
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
