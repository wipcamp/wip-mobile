import { initState } from './InitState'

const SET_DATE = "SET_DATE"

export default function reducer (state = initState, action) {
    switch (action.type) {
        case SET_DATE:
            return {
                date: action.date
            }
        default :
            return state
    }
}

export const setDate = date => ({
    type: SET_DATE,
    date
})
