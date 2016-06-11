import expect from 'expect'
import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import Error from '../../components/Error'
import styles from '../../styles/Error.css'

let wrapper

describe('Error component', () => {
  beforeEach(() => {
    wrapper = shallow(<Error errors={[]} />)
  })
  it('Should not display ul when no errors', () => {
    expect(wrapper.find(`div.${styles.error}`).first().text()).toEqual('');
  })
  it('Should render errors', () => {
    wrapper.setProps({errors: ['Some Error String', 'Another Error']})
    expect(wrapper.find('li').first().text()).toEqual('Some Error String')
    expect(wrapper.find('li').at(1).text()).toEqual('Another Error')
  })
  it('Should trigger an event on `close` click', () => {
    wrapper.setProps({errors: ['Some Error String', 'Another Error']})
    let onCloseClick = sinon.spy()
    wrapper.setProps({closeErrors: onCloseClick})
    wrapper.find(`.${styles.close}`).first().simulate('click');
    expect(onCloseClick.calledOnce).toEqual(true);
  });
})
