import Api from './api'
import { getToken } from './apiAuth'

export async function getAll() {
    let api = await Api.get('/problemtypes/', {Authorization: `Bearer ${await getToken()}`})
    return api.data
}