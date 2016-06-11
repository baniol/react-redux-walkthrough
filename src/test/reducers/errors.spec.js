import expect from 'expect'
import reducer from '../../reducers/errors'
import * as types from '../../constants/ActionTypes'

describe('errors reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  })

  describe('REQUEST_ERROR', () => {
    it('return an error array if error payload is set to error', () => {
      expect(
        reducer(['first error'], {
          type: types.REQUEST_ERROR,
          error: 'Some Error'
        })
      ).toEqual([ 'first error', 'Some Error' ])
    })
  })

  describe('CLOSE_ERRORS', () => {
    it('return an empty array after errors reset', () => {
      expect(
        reducer(['first error'], {
          type: types.CLOSE_ERRORS
        })
      ).toEqual([])
    })
  })

})
