import expect from 'expect'
import reducer from '../../reducers/loader'

describe('loader reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(false)
  })

  describe('MAKE_REQUEST', () => {
    it('set loader to true for MAKE_REQUEST', () => {
      expect(
        reducer(null, {
          type: 'MAKE_REQUEST',
          loader: true
        })
      ).toEqual(true)
    })
  })

  describe('MAKE_REQUEST', () => {
    it('set loader to false from true for MAKE_REQUEST', () => {
      expect(
        reducer(true, {
          type: 'MAKE_REQUEST',
          loader: false
        })
      ).toEqual(false)
    })
  })

  describe('FETCH_EMPLOYEES', () => {
    it('set loader to true for FETCH_EMPLOYEES', () => {
      expect(
        reducer(null, {
          type: 'FETCH_EMPLOYEES',
          loader: true
        })
      ).toEqual(true)
    })
  })

  describe('FETCH_EMPLOYEES', () => {
    it('set loader to false from true for FETCH_EMPLOYEES', () => {
      expect(
        reducer(true, {
          type: 'FETCH_EMPLOYEES',
          loader: false
        })
      ).toEqual(false)
    })
  })

  describe('REQUEST_ERROR', () => {
    it('set loader to true for REQUEST_ERROR', () => {
      expect(
        reducer(null, {
          type: 'REQUEST_ERROR',
          loader: true
        })
      ).toEqual(true)
    })
  })

  describe('REQUEST_ERROR', () => {
    it('set loader to false from true for REQUEST_ERROR', () => {
      expect(
        reducer(true, {
          type: 'REQUEST_ERROR',
          loader: false
        })
      ).toEqual(false)
    })
  })

})
