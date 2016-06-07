import expect from 'expect'
import React from 'react'
import sinon from 'sinon'
import { shallow } from 'enzyme'
import PositionFilter from '../../components/PositionFilter'

let wrapper

describe('PositionFilter component', () => {
  beforeEach(() => {
    let props = {
      positions: ['Software Architect', 'Web Developer', 'Java Developer', 'Project Manager'],
      currentFilter: 'Web Developer',
      setPositionFilter: function (){}
    }
    wrapper = shallow(<PositionFilter {...props} />)
  })
  it('Should render the li elements', () => {
    expect(wrapper.find('li').length).toEqual(4)
  });
  it('Should trigger an event on li click', () => {
    let onFilterClick = sinon.spy()
    wrapper.setProps({setPositionFilter: onFilterClick})
    wrapper.find('li').first().simulate('click');
    expect(onFilterClick.calledOnce).toEqual(true);
  });
  it('Should have filter item not highlighted', () => {
    expect(wrapper.find('li').first().props().style).toExclude({backgroundColor: 'silver'})
  });
  it('Should highlight the current filter', () => {
    wrapper.setProps({currentFilter: 'Software Architect'})
    expect(wrapper.find('li').first().props().style).toInclude({backgroundColor: 'silver'})
  });
});
