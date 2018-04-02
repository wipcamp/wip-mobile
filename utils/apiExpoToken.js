import Api from './api'
import { refresh, getToken } from './apiAuth'

export async function post(data) {
    let api
    try {
        api = await Api.post('/expotokens/', data, {Authorization: `Bearer ${await getToken()}`})
    }
    catch (error) {
        if(error.status == 401) {
            await refresh()
            api = await Api.post('/expotokens/', data, {Authorization: `Bearer ${await getToken()}`})
        }
    }
    return api.data
}