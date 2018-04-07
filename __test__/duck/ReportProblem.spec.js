/**
 * @jest-environment node
 */

import reducer, {
    addProblem,
    sortProblem,
    updateProblem,
    resetProblem
} from '../../ducks/ReportProblem'

import { initState } from '../../ducks/InitState'
import { problem } from '../../mocks/data'

describe('action', () => {
    it('addProblem', () => {
        expect(addProblem(problem[0])).toMatchSnapshot()
    })

    it('sortProblem', () => {
        expect(sortProblem()).toMatchSnapshot()
    })

    it('updateProblem', () => {
        expect(updateProblem(problem[0])).toMatchSnapshot()
    })
    
    it('resetProblem', () => {
        expect(resetProblem()).toMatchSnapshot()
    })
})

describe('reducer', () => {
    it('ADD_PROBLEM', () => {
        expect(reducer(initState, addProblem(problem[0]))).toMatchSnapshot()
    })

    it('SORT_PROBLEM', () => {
        expect(reducer(initState, sortProblem())).toMatchSnapshot()
    })

    it('UPDATE_PROBLEM', () => {
        expect(reducer(initState, updateProblem(problem[0]))).toMatchSnapshot()
    })

    it('RESET_PROBLEM', () => {
        expect(reducer(initState, resetProblem())).toMatchSnapshot()
    })

    it('default', () => {
        expect(reducer(initState, {
            type: 'default'
        })).toMatchSnapshot()
    })
})