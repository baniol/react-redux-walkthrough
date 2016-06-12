import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../actions'
import nock from 'nock'
import expect from 'expect'
import * as types from '../../constants/ActionTypes'
import config from '../../config'

const mockStore = configureMockStore([thunk])
const employeeResult = [{
  id: 1,
  name: 'Reese Hardin',
  position: 'Web Developer'
}]

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
    it('creates RETURN_EMPLOYEES when fetching employees has been done', () => {
      nock(config.apiServerUrl)
        .get('/employees')
        .reply(200, employeeResult)

      const expectedActions = [
        { type: types.MAKE_REQUEST, loader: 'show' },
        { type: types.RETURN_EMPLOYEES, loader: 'hide', employees: employeeResult }
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
    it('creates RETURN_POSITIONS when fetching positions has been done', () => {
      nock(config.apiServerUrl)
        .get('/positions')
        .reply(200, positionsData)

      const expectedActions = [
        { type: types.MAKE_REQUEST, loader: 'show' },
        { type: types.RETURN_POSITIONS, loader: 'hide', positions: positionsData }
      ]
      const store = mockStore({ employees: [] })

      return store.dispatch(actions.fetchPositions())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })

})
