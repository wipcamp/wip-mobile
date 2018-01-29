export const initState = {
    filter : 0, 
    problem : [], // for all problem in database
    newProblem : {
        topic: "",
        problem_type_id: 0,
        description: "",
        report_id: null
    }, // for report problem any input
    catagoryProblem : [],
    filterView : [{
        value: 0,
        label: "ทั้งหมด"
    }]
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