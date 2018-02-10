import Api from '../utils/api'
import { getToken } from '../utils/apiAuth'

export function get(id) {
    return async dispatch => {
        let api = await Api.get(`/profiles/${id}`, {Authorization: `Bearer ${getToken()}`})
        if(api.data.error) {
        }
        return api
    }
}