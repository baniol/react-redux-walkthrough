import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import EmployeeList from '../../components/EmployeeList'
import employeeData from '../fixtures/employeesMocked'
import styles from '../../styles/EmployeeList.css'

let wrapper

describe('EmployeeList component', () => {
  beforeEach(() => {
    let props = {
      employees: employeeData,
      removeEmployee: function () {}
    }
    wrapper = shallow(<EmployeeList {...props} />)
  })

  it('Should render the ul and li elements', () => {
    expect(wrapper.find('ul').length).toEqual(1)
    expect(wrapper.find('li').length).toEqual(2)
  })
  it('Should render employee name in the first li as text', () => {
    expect(wrapper.find(`.${styles.personName}`).first().text()).toEqual('Reese Hardin')
  })
  it('Should render employee name in the second li as text', () => {
    expect(wrapper.find(`.${styles.personName}`).at(1).text()).toEqual('Cora Ashley')
  })
  it('Should render employee position in the first li as text', () => {
    expect(wrapper.find(`.${styles.personPosition}`).first().text()).toEqual('Web Developer')
  })
  it('Should render employee position in the second li as text', () => {
    expect(wrapper.find(`.${styles.personPosition}`).at(1).text()).toEqual('Java Developer')
  })
  // @TODO remove employee test
})
