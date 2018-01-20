export const initState = {
    filter : "ALL", 
    problem : [], // for all problem in database
    newProblem : {
        topic: "",
        problemType: 0,
        description: "",
        isSolve: false,
        reportId: null
    }, // for report problem any input
    catagoryProblem : []
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