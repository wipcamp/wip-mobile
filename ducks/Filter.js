import { initState } from './InitState'

const SET_FILTER = 'SET_FILTER'
const ADD_FILTER = 'ADD_FILTER'

export  default function reducer (state = initState, action) {
    switch (action.type) {
        case SET_FILTER:
            return {
                ...state,
                filter : action.filter
            }
        case ADD_FILTER:
            return {
                filterView : [
                    ...state.filterView,
                    action.filter
                ]
            }
        default:
            return state
    }
}

export const setFilter = (filter) => ({
    type: SET_FILTER,
    filter
})

export const addFilter = (filter) => ({
    type: ADD_FILTER,
    filter
})