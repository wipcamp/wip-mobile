import { initState } from './InitState'

const SET_NEW_TOPIC = "SET_NEW_TOPIC"
const SET_NEW_ID = "SET_NEW_ID"
const SET_NEW_DESCRIPTION = "SET_NEW_DESCRIPTION"
const SET_NEW_REPORTID = "SET_NEW_REPORTID"

export default function reducer (state = initState, action) {
    switch (action.type) {
        case SET_NEW_TOPIC : 
            return {
                newProblem : {
                    topic : action.topic
                }
            }
        case SET_NEW_ID :
            return {
                newProblem : {
                    problemTypeId : action.id
                }
            }
        case SET_NEW_DESCRIPTION : 
            return {
                newProblem : {
                    description : action.description
                }
            }
        case SET_NEW_REPORTID : 
            return {
                newProblem : {
                    reportId : action.id
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

export const setNewProblemTypeId = id => ({
    type : SET_NEW_ID,
    id
})

export const setNewProblemDescription = description => ({
    type : SET_NEW_DESCRIPTION,
    description
})

export const setNewProblemReportId = id => ({
    type : SET_NEW_REPORTID,
    id
})
