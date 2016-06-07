import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Loader from '../../components/Loader'

let wrapper

describe('Loader component', () => {
  beforeEach(() => {
    wrapper = shallow(<Loader/>)
  })
  it('Should not display loader', () => {
    expect(wrapper.find('div.loader').first().text()).toEqual('')
  })
  it('Should render errors', () => {
    wrapper.setProps({loader: true})
    expect(wrapper.find('div.loader').first().text()).toEqual('Loading ...')
  })
})
