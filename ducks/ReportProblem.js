import { initState } from './InitState'

const ADD_PROBLEM = "ADD_PROBLEM"
const SOLVE_PROBLEM = "SOLVE_PROBLEM"

export default function reducer (state = initState, action) {
    switch (action.type) {
        case ADD_PROBLEM : 
            return {
                problem : [
                    ...state.problem,
                    action.problem
                ]
            }
        case SOLVE_PROBLEM :
            return state.problem.map(problem => 
                (problem.id == action.id)
                    ? {...problem, isSolve: true}
                    : problem
            )
        default : 
            return state
    }
}

export const addProblem = problem => ({
    type : ADD_PROBLEM,
    problem
})

export const solveProblem = id => ({
    type : SOLVE_PROBLEM,
    id
})