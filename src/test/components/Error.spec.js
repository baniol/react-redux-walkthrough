import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Error from '../../components/Error'

let wrapper

describe('Error component', () => {
  beforeEach(() => {
    wrapper = shallow(<Error/>)
  })
  it('Should have .error-msg element empty', () => {
    expect(wrapper.find('div.error-msg').first().text()).toEqual('')
  })
  it('Should render errors', () => {
    wrapper.setProps({error: 'Some Error String'})
    expect(wrapper.find('div.error-msg').first().text()).toEqual('Some Error String')
  })
})
