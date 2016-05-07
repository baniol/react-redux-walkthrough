import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import App from '../../components/App'
import EmployeeList from '../../components/EmployeeList'
import PositionFilter from '../../components/PositionFilter'

let wrapper

describe('App component', () => {
  beforeEach(() => {
    wrapper = shallow(<App/>);
  })
  it('Should render the application', () => {
    expect(wrapper.find(PositionFilter).length).toEqual(1)
    expect(wrapper.find(EmployeeList).length).toEqual(1)
  });
  it('Should contain 2 components', () => {
    expect(wrapper.children().length).toEqual(2)
  })
});
