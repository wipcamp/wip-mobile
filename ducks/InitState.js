export const initState = {
    problem : [], // for all problem in database
    newProblem : {
        topic: "",
        problem_type_id: 0,
        description: "",
        report_id: null,
        priority_id: 0
    }, // for report problem any input
    categoryProblem : [],
    priority : [],
    timetable: [],
    notification: []
}

const INIT_STATE = "INIT_STATE"

export default function reducer (state = initState, action) {
    switch (action.type) {
        case INIT_STATE:
            return initState
        default:
            return state
    }
}

export const SET_INIT = () => ({
    type: INIT_STATE
})