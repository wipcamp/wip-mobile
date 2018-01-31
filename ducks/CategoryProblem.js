import { initState } from './InitState'

const ADD_CATEGORY = "ADD_CATEGORY"

export default function reducer (state = initState, action) {
    switch (action.type) {
        case ADD_CATEGORY:
            return {
                categoryProblem : [
                    ...state.categoryProblem,
                    action.category
                ]
            }
        default:
            return state
    }
}

export const addCategory = (category) => ({
    type: ADD_CATEGORY,
    category
})