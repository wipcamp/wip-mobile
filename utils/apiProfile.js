import Api from './api'
import { refresh, getToken } from './apiAuth'

export async function get(id) {
    let api
    try {
        api = await Api.get(`/profiles/${id}`, {Authorization: `Bearer ${await getToken()}`})        
    }
    catch (error) {
        if(error.status == 401) {
            await refresh()
            api = await Api.get(`/profiles/${id}`, {Authorization: `Bearer ${await getToken()}`})        
        }    
    }
    return api.data
}