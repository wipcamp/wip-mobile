import Api from './api'
import { refresh, getToken } from './apiAuth'

export async function getByUserId(userId) {
    let api
    try {
        api = await Api.get(`/userroleteams/user_id/${userId}`, {Authorization: `Bearer ${await getToken()}`})
    }
    catch (error) {
        if(error.status == 401) {
            await refresh()
            api = await Api.get(`/userroleteams/user_id/${userId}`, {Authorization: `Bearer ${await getToken()}`})
        }
    }
    return api.data
}