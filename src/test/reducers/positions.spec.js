import expect from 'expect'
import reducer from '../../reducers/positions'

describe('positions reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual(
      ['Software Architect', 'Web Developer', 'Java Developer', 'Project Manager']
    )
  })
})
