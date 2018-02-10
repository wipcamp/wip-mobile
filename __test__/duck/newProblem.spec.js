/**
 * @jest-environment node
 */

import reducer, {
    setNewProblemTopic, 
    setNewProblemType, 
    setNewProblemDescription, 
    setNewProblemReportId
} from '../../ducks/NewProblem'

describe('new problem duck', () => {
    describe('action', () => {
        it('should create an action to set topic', () => {
            const topic = "Test Topic"
            const expectedAction = {
                type: 'SET_NEW_TOPIC',
                topic
            }
            expect(setNewProblemTopic(topic)).toEqual(expectedAction)
        })
    })

    describe('reducer', () => {

    })
})