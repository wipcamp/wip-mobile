/**
 * @jest-environment node
 */

import reducer, {
    addPriority
} from '../../ducks/Priority'

import { initState } from '../../ducks/InitState'
import { priority } from '../../mocks/data'

describe('action', () => {
    it('addPriority', () => {
        expect(addPriority(priority[0])).toMatchSnapshot()
    })
})

describe('reducer', () => {
    it('ADD_PRIORITY', () => {
        expect(reducer(initState, addPriority(priority[0]))).toMatchSnapshot()
    })

    it('default', () => {
        expect(reducer(initState, {
            type: 'default'
        })).toMatchSnapshot()
    })
})