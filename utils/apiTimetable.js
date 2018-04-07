import Api from './api'
import { refresh, getToken } from './apiAuth'

export async function getAll() {
    let api
    try {
        api = await Api.get('/timetables/', {Authorization: `Bearer ${await getToken()}`})
    }
    catch (error) {
        if(error.status == 401) {
            await refresh()
            api = await Api.get('/timetables/', {Authorization: `Bearer ${await getToken()}`})
        }
    }
    return api.data
}

export async function get(id) {
    let api
    try {
        api = await Api.get(`/timetables/${id}`, {Authorization: `Bearer ${await getToken()}`})
    }
    catch (error) {
        if(error.status == 401) {
            await refresh()
            api = await Api.get(`/timetables/${id}`, {Authorization: `Bearer ${await getToken()}`})
        }
    }
    if (typeof api == "undefined") {
        return ""
    }
    else {
        return api.data
    }
}

export async function getByRoleTeamId(roleTeamId) {
    let api
    try {
        api = await Api.get(`/timetables/role_team_id/${roleTeamId}`, {Authorization: `Bearer ${await getToken()}`})
    }
    catch (error) {
        if(error.status == 401) {
            await refresh()
            api = await Api.get(`/timetables/role_team_id/${roleTeamId}`, {Authorization: `Bearer ${await getToken()}`})
        }
    }
    return api.data
}

export async function getByDate(date) {
    let api
    try {
        api = await Api.get(`/timetables/start_on/${date}`, {Authorization: `Bearer ${await getToken()}`})
    }
    catch (error) {
        if(error.status == 401) {
            await refresh()
            api = await Api.get(`/timetables/start_on/${date}`, {Authorization: `Bearer ${await getToken()}`})
        }
    }
    return api.data
}