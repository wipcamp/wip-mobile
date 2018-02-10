import Api from '../utils/api'
import { getToken } from '../utils/apiAuth'
import { addCategory, resetCategory } from './CategoryProblem'
import { addFilter, setFilter } from './Filter'

export function getAllForCategory() {
    return async dispatch => {
        dispatch(resetCategory())
        let api = await Api.get('/problemtypes/', {Authorization: `Bearer ${getToken()}`})
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
        let api = await Api.get('/problemtypes/', {Authorization: `Bearer ${getToken()}`})
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