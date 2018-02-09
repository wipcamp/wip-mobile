import axios from 'axios'

import env from '../config'

export function get(id) {
    return async dispatch => {
        let api = await axios.get(`${env.API_URL}/profiles/${id}`)
        return api
    }
}