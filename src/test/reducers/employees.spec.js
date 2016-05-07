import expect from 'expect'
import reducer from '../../reducers/employees'

describe('employees reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {}).length
    ).toEqual(10)
  })
})
