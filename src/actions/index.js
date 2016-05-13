import fetch from 'isomorphic-fetch'

export const setPositionFilter = (name) => {
  return {
    type: 'SET_POSITION_FILTER',
    name
  }
}

function makeRequest() {
  return {
    type: 'MAKE_REQUEST',
    loader: true
  }
}

function returnPeople(people) {
  return {
    type: 'FETCH_PEOPLE',
    people,
    loader: false
  }
}

export const fetchPeople = () => {
  return dispatch => {
    dispatch(makeRequest())
    return fetch('http://localhost:3001')
      .then(response => response.json())
      .then(json => {
        // if (json.status >= 400) {
        //   dispatch(requestError(json.errors))
        // } else {
          dispatch(returnPeople(json))
        // }
      })
  }
}
