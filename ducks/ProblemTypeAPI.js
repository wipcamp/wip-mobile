import { getAll as getAllProblemType } from '../utils/apiProblemType'
import { addCategory, resetCategory } from './CategoryProblem'
import { addFilter, setFilter } from './Filter'

export function getAllForCategory() {
    return async dispatch => {
        dispatch(resetCategory())
        let datas = await getAllProblemType()
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
        let datas = await getAllProblemType()
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