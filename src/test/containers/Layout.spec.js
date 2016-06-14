import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import { Layout } from '../../containers/Layout'
import Menu from '../../components/Menu'
import Loader from '../../components/Loader'
import Error from '../../components/Error'

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
  });
})
