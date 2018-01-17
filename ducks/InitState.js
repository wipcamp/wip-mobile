export const initState = {
    filter : "ALL", 
    problem : [], // for all problem in database
    newProblem : {
        topic: null,
        problemTypeId: null,
        description: null,
        isSolve: false,
        reportId: null
    } // for report problem any input
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