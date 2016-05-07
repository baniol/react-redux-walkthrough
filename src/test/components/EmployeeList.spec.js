import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import { EmployeeList } from '../../components/EmployeeList'

let wrapper

describe('EmployeeList component', () => {
  beforeEach(() => {
    let props = {
      employees: [
        {
      		"id": 1,
      		"name": "Reese Hardin",
      		"position": "Web Developer"
      	},
      	{
      		"id": 2,
      		"name": "Cora Ashley",
      		"position": "Java Developer"
      	}
      ]
    }
    wrapper = shallow(<EmployeeList {...props} />)
  })
  it('Should render the ul and li elements', () => {
    expect(wrapper.find('ul').length).toEqual(1)
    expect(wrapper.find('li').length).toEqual(2)
  });
  // @TODO more tests
});
