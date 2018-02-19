import Api from './api'
import { getToken } from './apiAuth'

export async function getAll() {
    let api = await Api.get('/problems/', {Authorization: `Bearer ${await getToken()}`})
    return api.data
}

export async function get(id) {
    let api = await Api.get(`/problems/${id}`, {Authorization: `Bearer ${await getToken()}`})
    return api.data
}

export async function post(data) {
    let api = await Api.post('/problems/', data, {Authorization: `Bearer ${await getToken()}`})
    return api.data
}

export async function put(id, data) {
    let api = await Api.put(`/problems/${id}`, data, {Authorization: `Bearer ${await getToken()}`})
    return api.data
}