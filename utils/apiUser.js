import Api from './api'
import { getToken } from './apiAuth'

export async function get(fbid, fbtoken) {
    let api = await Api.post(
        `/users/${fbid}`,
        {
            id: fbid,
            accessToken: fbtoken
        },
        {
            Authorization: `Bearer ${await getToken()}`
        }
    )
    let data = api.data.data
    return data
}