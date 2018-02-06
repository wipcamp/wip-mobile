import axios from 'axios'

import { addCategory, resetCategory } from './CategoryProblem'

import env from '../config'

export function getAllForCategory() {
    return async dispatch => {
        dispatch(resetCategory())
        let api = await axios.get(`${env.API_URL}/problemtypes/`)
        let datas = api.data
        datas.map(data => {
            let category = {
                value: data.id,
                label: data.name
            }
            dispatch(addCategory(category))
        })
    }
}