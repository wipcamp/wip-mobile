import { initState } from './InitState'

const SET_FILTER_ALL = 'SET_FILTER_ALL'

export  default function reducer (state = initState, action) {
    switch (action.type) {
        case SET_FILTER_ALL:
            return {
                ...state,
                filter : "ALL"
            }
        default:
            return state
    }
}

export const setAll = () => {
    type: SET_FILTER_ALL
}