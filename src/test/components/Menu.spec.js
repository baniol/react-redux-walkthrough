import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Menu from '../../components/Menu'
import styles from '../../styles/Menu.css'

let wrapper

describe('Menu component', () => {
  beforeEach(() => {
    wrapper = shallow(<Menu pathname='/' />)
  })
  it('Should render the ul and li elements', () => {
    expect(wrapper.find('ul').length).toEqual(1)
    expect(wrapper.find('li').length).toEqual(2)
  })
  it('Should render employee data in the first li as text', () => {
    expect(wrapper.find('li').at(0).props().children.props.children).toEqual('Employee List')
    expect(wrapper.find('li').at(0).props().children.props.to).toEqual('/')
    expect(wrapper.find('li').at(1).props().children.props.children).toEqual('Add Employee')
    expect(wrapper.find('li').at(1).props().children.props.to).toEqual('/addemployee')
  })
  it('Should add active class to `/` route', () => {
    expect(wrapper.find('li').at(0).hasClass(styles.active)).toEqual(true)
  })
  it('Should add active class to `/addemployee` route', () => {
    wrapper.setProps({pathname: '/addemployee'})
    expect(wrapper.find('li').at(1).hasClass(styles.active)).toEqual(true)
  })
})
