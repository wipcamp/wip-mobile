import Api from './api'
import { refresh, getToken } from './apiAuth'

export async function getAll() {
    let api
    try {
        api = await Api.get('/announces/', {Authorization: `Bearer ${await getToken()}`})        
    }
    catch (error) {
        if(error.status == 401) {
            await refresh()
            api = await Api.get('/announces/', {Authorization: `Bearer ${await getToken()}`})
        }
    }
    return api.data
}

export async function get(id) {
    let api
    try {
        api = await Api.get(`/announces/${id}`, {Authorization: `Bearer ${await getToken()}`})    
    }
    catch (error) {
        if(error.status == 401) {
            await refresh()
            api = await Api.get(`/announces/${id}`, {Authorization: `Bearer ${await getToken()}`})
        }        
    }
    return api.data
}