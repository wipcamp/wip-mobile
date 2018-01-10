import InitState from "./InitState";

const ADD_PROBLEM = "ADD_PROBLEM"

export const addProblem = problem => ({
    type : ADD_PROBLEM,
    problem
})

export default reducer(state = InitState, action) {
    switch (action.type) {
        case ADD_PROBLEM : 
            return {
                ...state.problem,
                action.problem
            }
        default : 
            return state
    }
}