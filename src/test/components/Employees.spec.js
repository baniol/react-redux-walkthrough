import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Employees from '../../components/Employees'
import EmployeeList from '../../containers/EmployeeList'
import PositionFilter from '../../components/PositionFilter'

let wrapper

describe('Employees component', () => {
  beforeEach(() => {
    wrapper = shallow(<Employees/>);
  })
  it('Should render the application', () => {
    expect(wrapper.find(PositionFilter).length).toEqual(1)
    expect(wrapper.find(EmployeeList).length).toEqual(1)
  });
  it('Should contain 2 components', () => {
    expect(wrapper.children().length).toEqual(2)
  })
});
