import { initState } from './InitState'

const ADD_PROBLEM = "ADD_PROBLEM"
const REVERSE_PROBLEM = "REVERSE_PROBLEM"
const UPDATE_PROBLEM = "UPDATE_PROBLEM"
const RESET_PROBLEM = "RESET_PROBELM"

export default function reducer (state = initState, action) {
    switch (action.type) {
        case ADD_PROBLEM : 
            return {
                problem : [
                    ...state.problem,
                    action.problem
                ]
            }
        case REVERSE_PROBLEM :
            return {
                problem : state.problem.reverse()
            }
        case UPDATE_PROBLEM :
            return {
                problem : state.problem.map(problem => {
                    if(problem.id == action.problem.id) {
                        return problem = action.problem
                    }
                    return problem
                })
            }
        case RESET_PROBELM :
            return {
                problem : []
            }
        default : 
            return state
    }
}

export const addProblem = problem => ({
    type : ADD_PROBLEM,
    problem
})

export const updateProblem = problem => ({
    type : UPDATE_PROBLEM,
    problem
})

export const reverseProblem = () => ({
    type : REVERSE_PROBLEM
})

export const resetProblem = () => ({
    type : RESET_PROBELM
})