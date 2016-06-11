import expect from 'expect'
import reducer from '../../reducers/positionFilter'
import * as types from '../../constants/ActionTypes'

describe('positionFilter reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(null)
  })
  describe('SET_POSITION_FILTER', () => {
    it('return the action.name if the state is null', () => {
      expect(
        reducer(null, {
          type: types.SET_POSITION_FILTER,
          name: 'Dev'
        })
      ).toEqual('Dev')
    })
    it('should return null if the action.name is the same as the state', () => {
      expect(
        reducer('Dev', {
          type: types.SET_POSITION_FILTER,
          name: 'Dev'
        })
      ).toEqual(null)
    })
    it('should return the action.name if it is different from the state ', () => {
      expect(
        reducer('Dev', {
          type: types.SET_POSITION_FILTER,
          name: 'QA'
        })
      ).toEqual('QA')
    })
  })
})
