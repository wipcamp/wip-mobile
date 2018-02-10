import Api from '../utils/api'
import { getToken } from '../utils/apiAuth'

export function get(id) {
    return async dispatch => {
        let api = await Api.get(`/problems/${id}`, {Authorization: `Bearer ${getToken()}`})
        if(api.data.error) {
        }
        return api
    }
}

export function post(data) {
    return async dispatch => {
        let api = await Api.post('/problems/', data, {Authorization: `Bearer ${getToken()}`})
        if(api.data.error) {
        }
        return api
    }
}

export function put(id, data) {
    return async dispatch => {
        let api = await Api.put(`/problems/${id}`, data, {Authorization: `Bearer ${getToken()}`})
        if(api.data.error) {
        }
        return api
    }
}