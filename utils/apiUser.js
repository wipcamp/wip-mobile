import Api from './api'
import { refresh, getToken } from './apiAuth'

export async function get(fbid, fbtoken) {
    let api
    try {
        api = await Api.post(
            `/users/${fbid}`,
            {
                id: fbid,
                accessToken: fbtoken
            },
            {
                Authorization: `Bearer ${await getToken()}`
            }
        )
    }
    catch (error) {
        if(error.status == 401) {
            await refresh()
            api = await Api.post(
                `/users/${fbid}`,
                {
                    id: fbid,
                    accessToken: fbtoken
                },
                {
                    Authorization: `Bearer ${await getToken()}`
                }
            )
        }
    }
    let data = api.data.data
    return data
}