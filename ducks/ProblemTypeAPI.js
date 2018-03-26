import { getAll as getAllProblemType } from '../utils/apiProblemType'
import { addCategory, resetCategory } from './CategoryProblem'

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