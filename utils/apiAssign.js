import Api from './api'
import { refresh, getToken } from './apiAuth'

export async function getByProblemId(id) {
    let api
    try {
        api = await Api.get(`/assigns/problem_id/${id}`, {Authorization: `Bearer ${await getToken()}`})    
    }
    catch (error) {
        if(error.status == 401) {
            await refresh()
            api = await Api.get(`/assigns/problem_id/${id}`, {Authorization: `Bearer ${await getToken()}`})
        }        
    }
    return api.data
}

export async function getByRoleTeamId(id) {
    let api
    try {
        api = await Api.get(`/assigns/role_team_id/${id}`, {Authorization: `Bearer ${await getToken()}`})    
    }
    catch (error) {
        if(error.status == 401) {
            await refresh()
            api = await Api.get(`/assigns/role_team_id/${id}`, {Authorization: `Bearer ${await getToken()}`})
        }        
    }
    return api.data
}

export async function getByAssignedId(id) {
    let api
    try {
        api = await Api.get(`/assigns/assigned_id/${id}`, {Authorization: `Bearer ${await getToken()}`})    
    }
    catch (error) {
        if(error.status == 401) {
            await refresh()
            api = await Api.get(`/assigns/assigned_id/${id}`, {Authorization: `Bearer ${await getToken()}`})
        }        
    }
    return api.data
}