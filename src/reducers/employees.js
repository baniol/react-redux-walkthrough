const employeeList = [
  {id: 1, name: 'Jonh Doe', position: 'Dev'},
  {id: 2, name: 'Will Smith', position: 'Architect'},
  {id: 3, name: 'Henry Trump', position: 'Dev'}
]

export default (state=employeeList, action) => {
  switch(action.type) {
    default:
      return state
  }
}
