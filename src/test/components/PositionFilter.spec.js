import expect from 'expect'
import React from 'react'
import sinon from 'sinon'
import { shallow, mount } from 'enzyme'
import { PositionFilter } from '../../components/PositionFilter'

let wrapper

describe('PositionFilter component', () => {
  beforeEach(() => {
    let props = {
      positions: ['Software Architect', 'Web Developer', 'Java Developer', 'Project Manager'],
      currentFilter: 'Web Developer',
      filterPositions: function (){}
    }
    wrapper = shallow(<PositionFilter {...props} />)
  })
  it('Should render the span elements', () => {
    expect(wrapper.find('span').length).toEqual(4)
  });
  it('Should trigger an event on span click', () => {
    let onFilterClick = sinon.spy()
    wrapper.setProps({filterPositions: onFilterClick})
    wrapper.find('span').first().simulate('click');
    expect(onFilterClick.calledOnce).toEqual(true);
  });
});
