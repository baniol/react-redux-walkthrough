import expect from 'expect'
import reducer from '../../reducers/loader'

describe('loader reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(0)
  })

  describe('Increment/decrement state', () => {
    it('should increment the loader state', () => {
      expect(
        reducer(0, {
          loader: 'show'
        })
      ).toEqual(1)
    })
    it('should increment the loader state', () => {
      expect(
        reducer(1, {
          loader: 'show'
        })
      ).toEqual(2)
    })
    it('should decrement the loader state', () => {
      expect(
        reducer(2, {
          loader: 'hide'
        })
      ).toEqual(1)
    })
    it('should set state to 0 if prev state < 0', () => {
      expect(
        reducer(-1, {
          loader: 'hide'
        })
      ).toEqual(0)
    })
  })

})
