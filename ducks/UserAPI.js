import Api from '../utils/api'
import { getToken } from '../utils/apiAuth'

export function get(fbid, fbtoken) {
    return async dispatch => {
        let api = await Api.post(
            `/profiles/${fbid}`,
            {
                id: fbid,
                accessToken: fbtoken
            },
            {Authorization: `Bearer ${getToken()}`})
        if(api.data.error) {
        }
        return api
    }
}