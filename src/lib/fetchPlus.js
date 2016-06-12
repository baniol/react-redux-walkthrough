import fetch from 'isomorphic-fetch'

export default (url) => {
  return fetch(url)
  .then(response => {
    if (response.status >= 400) {
      const errorText = `${response.status} : ${response.statusText}`
      const error = new Error(errorText)
      throw error
    }
    return response.json()
  })
}
