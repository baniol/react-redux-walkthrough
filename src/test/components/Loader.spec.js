import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Loader from '../../components/Loader'
import styles from '../../styles/Loader.css'

let wrapper

describe('Loader component', () => {
  beforeEach(() => {
    wrapper = shallow(<Loader/>)
  })
  it('Should not display loader', () => {
    expect(wrapper.find(`div.${styles.loaderWrapper}`).first().props().style).toInclude({display: 'none'})
    expect(wrapper.find(`div.${styles.loaderWrapper}`).first().text()).toEqual('')
  })
  it('Should render errors', () => {
    wrapper.setProps({loader: true})
    expect(wrapper.find(`div.${styles.loaderWrapper}`).first().props().style).toInclude({display: 'block'})
    expect(wrapper.find(`div.${styles.loader}`).first().text()).toEqual('Loading ...')
  })
})
