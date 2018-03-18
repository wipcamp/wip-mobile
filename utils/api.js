import axios from 'axios'

import env from '../config'

const createInstance = (headers) => {
  return axios.create({
    baseURL: env.API_URL,
    headers
  })
}

const handleResponse = res => res.data ? Promise.resolve(res) : Promise.reject(res)

const catchError = error => Promise.reject({
  status: error.response.status,
  message: error.message
})

export default {
  get: (path, headers = {}) => (
    createInstance(headers)
      .get(path)
      .then(handleResponse)
      .catch(catchError)
  ),
  post: (path, body = {}, headers = {}) => (
    createInstance(headers)
      .request({
        url: path,
        method: 'POST',
        data: body
      })
      .then(handleResponse)
      .catch(catchError)
  ),
  put: (path, body = {}, headers = {}) => (
    createInstance(headers)
      .request({
        url: path,
        method: 'PUT',
        data: body
      })
      .then(handleResponse)
      .catch(catchError)
  )
}