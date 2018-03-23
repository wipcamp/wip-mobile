import { initState } from './InitState'

const ADD_PRIORITY = "ADD_PRIORITY"

export default function reducer (state = initState, action) {
    switch (action.type) {
        case ADD_PRIORITY:
            return {
                priority : [
                    ...state.priority,
                    action.priority
                ]
            }
        default:
            return state
    }
}

export const addPriority = (priority) => ({
    type: ADD_PRIORITY,
    priority
})