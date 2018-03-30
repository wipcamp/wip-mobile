import Api from './api'
import { refresh, getToken } from './apiAuth'

export async function get(id) {
    let api
    try {
        api = await Api.get(`/roleteams/${id}`, {Authorization: `Bearer ${await getToken()}`})
    }
    catch (error) {
        if(error.status == 401) {
            await refresh()
            api = await Api.get(`/roleteams/${id}`, {Authorization: `Bearer ${await getToken()}`})
        }
    }
    return api.data
}

export async function getByName(name) {
    let api
    try {
        api = await Api.get(`/roleteams/name/${name}`, {Authorization: `Bearer ${await getToken()}`})
    }
    catch (error) {
        if(error.status == 401) {
            await refresh()
            api = await Api.get(`/roleteams/name/${name}`, {Authorization: `Bearer ${await getToken()}`})
        }
    }
    return api.data
}