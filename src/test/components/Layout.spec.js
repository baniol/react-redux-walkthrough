import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Layout from '../../components/Layout'
import Menu from '../../components/Menu'

let wrapper

describe('Employees component', () => {
  beforeEach(() => {
    wrapper = shallow(<Layout/>)
  })
  it('Should render the application', () => {
    expect(wrapper.find(Menu).length).toEqual(1)
  })
})
