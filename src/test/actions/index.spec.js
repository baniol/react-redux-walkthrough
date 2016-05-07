import expect from 'expect'
import * as actions from '../../actions'

describe('Actions', () => {

  it('setPositionFilter should create SET_POSITION_FILTER action', () => {
    expect(actions.setPositionFilter('Developer')).toEqual({
      type: 'SET_POSITION_FILTER',
      name: 'Developer'
    })
  })

})
