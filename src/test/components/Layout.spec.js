import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Layout from '../../components/Layout'
import Menu from '../../components/Menu'

let wrapper

describe('Layout component', () => {
  beforeEach(() => {
    const location = {pathname: '/'}
    wrapper = shallow(<Layout location={location} />)
  })
  it('Should render the application', () => {
    expect(wrapper.find(Menu).length).toEqual(1)
  })
})
