import env from '../config'

const handleJson = res => {
  if (res.ok) {
    let r = res._bodyText.split('<link')
    if (r.length > 1) {
      if(r[0].indexOf('[') == 0) {
        let data = []
        let re = r[0].substring(1, r[0].length - 1)
          .split('},')
        re.map((d, i) => {
          if ( i != re.length - 1) {
            d += '}'
          }
          data.push(JSON.parse(d))
        })
        return data
      }
      else if (r[0].indexOf('true') == 1 || r[0].indexOf('false') == 1) {
        return r[0]
      }
      else {
        return JSON.parse(r[0])
      }
    }
    return res.json()
  }
  else {
    let error = new Error(res.status)
    throw error
  }
}

const handleResponse = res => {
  return Promise.resolve({
    data: res
  })
}

const catchError = error => Promise.reject({
  status: error.message
})

export default {
  get: (path, headers = {}) => {
    return fetch(`${env.API_URL}${path}`, {
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    })
    .then(handleJson)
    .then(handleResponse)
    .catch(catchError)
  },
  post: (path, body = {}, headers = {}) => {
    return fetch(`${env.API_URL}${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    })
    .then(handleJson)
    .then(handleResponse)
    .catch(catchError)
  },
  put: (path, body = {}, headers = {}) => {
    return fetch(`${env.API_URL}${path}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        ...headers
      }
    })
    .then(handleJson)
    .then(handleResponse)
    .catch(catchError)
  }
}