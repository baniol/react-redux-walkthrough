import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import App from '../../components/App'
import EmployeeList from '../../components/EmployeeList'
import PositionFilter from '../../components/PositionFilter'

describe('App component', () => {
  it('Should render the application', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(PositionFilter).length).toEqual(1)
    expect(wrapper.find(EmployeeList).length).toEqual(1)
  });
});
