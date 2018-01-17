import InitState from '../utils/InitState'

const ADD_PROBLEM = "ADD_PROBLEM"

export default function reducer (state = InitState, action) {
    switch (action.type) {
        case ADD_PROBLEM : 
            return {
                problem: [
                    ...state.problem,
                    action.problem
                ]
            }
        default : 
            return state
    }
}

export const addProblem = problem => ({
    type : ADD_PROBLEM,
    problem
})