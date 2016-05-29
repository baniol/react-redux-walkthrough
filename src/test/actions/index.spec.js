import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../../actions'
import nock from 'nock'
import expect from 'expect'

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
        type: 'SET_POSITION_FILTER',
        name: 'Developer'
      })
    })
  })

  describe('fetchEmployees', () => {
    it('creates EMPLOYEES_LOADED when fetching employees has been done', () => {
      nock('http://localhost:3001')
        .get('/employees')
        .reply(200, employeeResult)

      const expectedActions = [
        { type: 'MAKE_REQUEST', loader: true },
        { type: 'EMPLOYEES_LOADED', loader: false, employees: employeeResult }
      ]
      const store = mockStore({ employees: [] })

      return store.dispatch(actions.fetchEmployees())
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })

})
