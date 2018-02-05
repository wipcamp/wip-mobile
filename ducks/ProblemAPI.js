import axios from 'axios'

import env from '../config'

export function post(data) {
    return async dispatch => (
        await axios.post(`${env.API_URL}/problems/`, data)
    )
}