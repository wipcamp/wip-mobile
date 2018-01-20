import { initState } from './InitState'

const ADD_CATAGORY = "ADD_CATAGORY"

export default function reducer (state = initState, action) {
    switch (action.type) {
        case ADD_CATAGORY:
            return {
                catagoryProblem : [
                    ...state.catagoryProblem,
                    action.catagory
                ]
            }
        default:
            return state
    }
}

export const addCatagory = (catagory) => ({
    type: ADD_CATAGORY,
    catagory
})