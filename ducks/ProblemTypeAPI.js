import axios from 'axios'

import env from '../config'

import { addCategory, resetCategory } from './CategoryProblem'
import { addFilter, setFilter } from './Filter'

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

export function getAllForFilter() {
    return async dispatch => {
        let api = await axios.get(`${env.API_URL}/problemtypes/`)
        let datas = api.data
        datas.map(data => {
            let filter = {
                value: data.id,
                label: data.name
            }
            dispatch(addFilter(filter))
        })
        dispatch(setFilter(0))
    }
}