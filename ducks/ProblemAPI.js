import axios from 'axios'

import env from '../config'

export function get(id) {
    return async dispatch => (
        await axios.get(`${env.API_URL}/problems/${id}`)
    )
}

export function post(data) {
    return async dispatch => (
        await axios.post(`${env.API_URL}/problems/`, data)
    )
}

export function put(id, data) {
    return async dispatch => (
        await axios.put(`${env.API_URL}/problems/${id}`, data)
    )
}