import { initState } from './InitState'

const ADD_PROBLEM = "ADD_PROBLEM"
const SORT_PROBLEM = "SORT_PROBLEM"
const UPDATE_PROBLEM = "UPDATE_PROBLEM"
const RESET_PROBLEM = "RESET_PROBLEM"

export default function reducer (state = initState, action) {
    switch (action.type) {
        case ADD_PROBLEM : 
            return {
                problem : [
                    ...state.problem,
                    action.problem
                ]
            }
        case SORT_PROBLEM :
            return {
                problem : state.problem.sort((a, b) => {
                    let compare = a.created_at.localeCompare(b.created_at)
                    if(compare == 0) {
                        return a.priority_id - b.priority_id
                    }
                    return compare * -1;
                })
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
        case RESET_PROBLEM :
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

export const sortProblem = () => ({
    type : SORT_PROBLEM
})

export const updateProblem = problem => ({
    type : UPDATE_PROBLEM,
    problem
})

export const resetProblem = () => ({
    type : RESET_PROBLEM
})