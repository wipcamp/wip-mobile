import Api from './api'
import { refresh ,getToken } from './apiAuth'

export async function getAll() {
    let api
    try {
        api = await Api.get('/problems/', {Authorization: `Bearer ${await getToken()}`})        
    }
    catch (error) {
        if(error.status == 401) {
            await refresh()
            api = await Api.get('/problems/', {Authorization: `Bearer ${await getToken()}`})
        }
    }
    return api.data
}

export async function get(id) {
    let api
    try {
        api = await Api.get(`/problems/${id}`, {Authorization: `Bearer ${await getToken()}`})    
    }
    catch (error) {
        if(error.status == 401) {
            await refresh()
            api = await Api.get(`/problems/${id}`, {Authorization: `Bearer ${await getToken()}`})
        }        
    }
    return api.data
}

export async function post(data) {
    let api
    try {
        api = await Api.post('/problems/', data, {Authorization: `Bearer ${await getToken()}`})
    }
    catch (error) {
        if(error.status == 401) {
            await refresh()
            api = await Api.post('/problems/', data, {Authorization: `Bearer ${await getToken()}`})
        }
    }
    return api.data
}

export async function put(id, data) {
    let api
    try {
        api = await Api.put(`/problems/${id}`, data, {Authorization: `Bearer ${await getToken()}`})        
    } catch (error) {
        if(error.status == 401) {
            await refresh()
            api = await Api.put(`/problems/${id}`, data, {Authorization: `Bearer ${await getToken()}`})                
        }        
    }
    return api.data
}