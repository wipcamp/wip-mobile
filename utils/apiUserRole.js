import Api from './api'
import { getToken } from './apiAuth'

export async function getByUserId(userId) {
    let api
    try {
        api = await Api.get(`/userroles/user_id/${userId}`, {Authorization: `Bearer ${await getToken()}`})
    }
    catch (error) {
        if(error.status == 401) {
            console.log('in error 401')
            await refresh()
            api = await Api.get(`/userroles/user_id/${userId}`, {Authorization: `Bearer ${await getToken()}`})
        }
    }
    return api.data
}