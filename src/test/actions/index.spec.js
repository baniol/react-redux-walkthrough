import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../actions'
import nock from 'nock'
import expect from 'expect'
import * as types from '../../constants/ActionTypes'

const mockStore = configureMockStore([thunk])
const employeeResult = [{
  id: 1,
  name: 'Reese Hardin',
  position: 'Web Developer'
}]

// @TODO actions to a separate files - combine?

describe('Actions', () => {

  afterEach(() => {
    nock.cleanAll()
  })

  describe('setPositionFilter', () => {
    it('should create SET_POSITION_FILTER action', () => {
      expect(actions.setPositionFilter('Developer')).toEqual({
        type: types.SET_POSITION_FILTER,
        name: 'Developer'
      })
    })
  })

  describe('closeErrors', () => {
    it('should emit CLOSE_ERRORS type', () => {
      expect(actions.closeErrors()).toEqual({
        type: types.CLOSE_ERRORS
      })
    })
  })

  describe('fetchEmployees', () => {
    it('creates FETCH_EMPLOYEES when fetching employees has been done', () => {
      // @TODO to config
      nock('http://localhost:3001')
        .get('/employees')
        .reply(200, employeeResult)

      const expectedActions = [
        { type: types.MAKE_REQUEST, loader: 'show' },
        { type: types.FETCH_EMPLOYEES, loader: 'hide', employees: employeeResult }
      ]
      const store = mockStore({ employees: [] })

      return store.dispatch(actions.fetchEmployees())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })

  describe('fetchPositions', () => {
    const positionsData = [ 'Software Architect', 'Web Developer', 'Java Developer', 'Project Manager' ]
    it('creates FETCH_POSITIONS when fetching positions has been done', () => {
      // @TODO to config
      nock('http://localhost:3001')
        .get('/positions')
        .reply(200, positionsData)

      const expectedActions = [
        { type: types.MAKE_REQUEST, loader: 'show' },
        { type: types.FETCH_POSITIONS, loader: 'hide', positions: positionsData }
      ]
      const store = mockStore({ employees: [] })

      return store.dispatch(actions.fetchPositions())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })

})
