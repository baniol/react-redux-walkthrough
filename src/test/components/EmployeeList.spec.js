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
  it('Should render employee data in the first li as text', () => {
    expect(wrapper.find('li').first().text()).toEqual('Reese Hardin - Web Developer')
  });
  it('Should render employee data in the second li as text', () => {
    expect(wrapper.find('li').at(1).text()).toEqual('Cora Ashley - Java Developer')
  });
});
