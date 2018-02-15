import Api from './api'
import { getToken } from './apiAuth'

export async function getByUserId(userId) {
    let api = await Api.get(`/userroles/user_id/${userId}`, {Authorization: `Bearer ${await getToken()}`})
    return api.data
}