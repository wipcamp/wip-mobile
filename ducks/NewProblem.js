import { initState } from './InitState'

const SET_NEW_TOPIC = "SET_NEW_TOPIC"
const SET_NEW_TYPE = "SET_NEW_TYPE"
const SET_NEW_DESCRIPTION = "SET_NEW_DESCRIPTION"
const SET_NEW_REPORTID = "SET_NEW_REPORTID"

export default function reducer (state = initState, action) {
    switch (action.type) {
        case SET_NEW_TOPIC : 
            return {
                newProblem : {
                    ...state.newProblem,
                    topic : action.topic
                }
            }
        case SET_NEW_TYPE :
            return {
                newProblem : {
                    ...state.newProblem,
                    problem_type_id : action.category
                }
            }
        case SET_NEW_DESCRIPTION : 
            return {
                newProblem : {
                    ...state.newProblem,
                    description : action.description
                }
            }
        case SET_NEW_REPORTID : 
            return {
                newProblem : {
                    ...state.newProblem,
                    report_id : action.id
                }
            }
        default : 
            return state
    }
}

export const setNewProblemTopic = topic => ({
    type : SET_NEW_TOPIC,
    topic
})

export const setNewProblemType = category => ({
    type : SET_NEW_TYPE,
    category
})

export const setNewProblemDescription = description => ({
    type : SET_NEW_DESCRIPTION,
    description
})

export const setNewProblemReportId = id => ({
    type : SET_NEW_REPORTID,
    id
})
