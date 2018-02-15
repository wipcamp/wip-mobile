import Api from './api'
import { getToken } from './apiAuth'

export async function get(id) {
    let api = await Api.get(`/profiles/${id}`, {Authorization: `Bearer ${await getToken()}`})
    return api.data
}