import api from '../utils/api'
import { getToken } from '../utils/apiAuth'

export function get(id) {
    return async dispatch => {
        let api = await api.get(`/problems/${id}`, {Authorization: `Bearer ${getToken()}`})
        if(api.data.error) {
        }
        return api
    }
}

export function post(data) {
    return async dispatch => {
        let api = await api.post('/problems/', data, {Authorization: `Bearer ${getToken()}`})
        if(api.data.error) {
        }
        return api
    }
}

export function put(id, data) {
    return async dispatch => {
        let api = await api.put(`/problems/${id}`, data, {Authorization: `Bearer ${getToken()}`})
        if(api.data.error) {
        }
        return api
    }
}