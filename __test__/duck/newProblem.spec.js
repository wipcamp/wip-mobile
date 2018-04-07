/**
 * @jest-environment node
 */

import reducer, {
    setNewProblemTopic, 
    setNewProblemType, 
    setNewProblemDescription, 
    setNewProblemReportId,
    setNewProblemPriorityId
} from '../../ducks/NewProblem'

import { initState } from '../../ducks/InitState'

describe('action', () => {
    it('setNewProblemTopic', () => {
        expect(setNewProblemTopic('Test')).toMatchSnapshot()
    })
    
    it('setNewProblemType', () => {
        expect(setNewProblemType(1)).toMatchSnapshot()
    })

    it('setNewProblemDescription', () => {
        expect(setNewProblemDescription('Test')).toMatchSnapshot()
    })

    it('setNewProblemReportId', () => {
        expect(setNewProblemReportId(1)).toMatchSnapshot()
    })

    it('setNewProblemPriorityId', () => {
        expect(setNewProblemPriorityId(1)).toMatchSnapshot()
    })
})

describe('reducer', () => {
    it('SET_NEW_TOPIC', () => {
        expect(reducer(initState, setNewProblemTopic('Test'))).toMatchSnapshot()
    })
    
    it('SET_NEW_TYPE', () => {
        expect(reducer(initState, setNewProblemType(1))).toMatchSnapshot()
    })

    it('SET_NEW_DESCRIPTION', () => {
        expect(reducer(initState, setNewProblemDescription('Test'))).toMatchSnapshot()
    })

    it('SET_NEW_REPORTID', () => {
        expect(reducer(initState, setNewProblemReportId(1))).toMatchSnapshot()
    })

    it('SET_NEW_PRIORITY', () => {
        expect(reducer(initState, setNewProblemPriorityId(1))).toMatchSnapshot()
    })

    it('default', () => {
        expect(reducer(initState, {
            type: 'default'
        })).toMatchSnapshot()
    })
})