import Api from './api'
import { refresh, getToken } from './apiAuth'

export async function getByName(name) {
    let api
    try {
        api = await Api.get(`/roles/name/${name}`, {Authorization: `Bearer ${await getToken()}`})
    }
    catch (error) {
        if(error.status == 401) {
            await refresh()
            api = await Api.get(`/roles/name/${name}`, {Authorization: `Bearer ${await getToken()}`})
        }
    }
    return api.data
}