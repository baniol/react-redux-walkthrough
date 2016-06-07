import expect from 'expect'
import reducer from '../../reducers/errors'

describe('errors reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(null)
  })

  describe('REQUEST_ERROR', () => {
    it('return an error string if error payload is set to error', () => {
      expect(
        reducer(null, {
          type: 'REQUEST_ERROR',
          error: 'Some Error'
        })
      ).toEqual('Some Error')
    })
  })

})
