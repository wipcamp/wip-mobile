import { initState } from './InitState'

const ADD_TIMETABLE = "ADD_TIMETABLE"
const UPDATE_TIMETABLE = "UPDATE_TIMETABLE"
const SORT_TIMETABLE = "SORT_TIMETABLE"
const RESET_TIMETABLE = "RESET_TIMETABLE"

export default function reducer (state = initState, action) {
    switch (action.type) {
        case ADD_TIMETABLE : 
            return {
                timetable : [
                    ...state.timetable,
                    action.timetable
                ]
            }
        case UPDATE_TIMETABLE :
            return {
                timetable : state.timetable.map(timetable => {
                    if(timetable.id == action.timetable.id) {
                        return timetable = action.timetable
                    }
                    return timetable
                })
            }
        case SORT_TIMETABLE :
            return {
                timetable : state.timetable.sort((a, b) => a.start_on.localeCompare(b.start_on))
            }
        case RESET_TIMETABLE :
            return {
                timetable : []
            }
        default : 
            return state
    }
}

export const addTimetable = timetable => ({
    type : ADD_TIMETABLE,
    timetable
})

export const updateTimetable = timetable => ({
    type : UPDATE_TIMETABLE,
    timetable
})

export const sortTimetable = () => ({
    type : SORT_TIMETABLE
})

export const resetTimetable = () => ({
    type : RESET_TIMETABLE
})
