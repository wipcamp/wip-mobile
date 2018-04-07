/**
 * @jest-environment node
 */

import reducer, {
    addCategory,
    resetCategory
} from '../../ducks/CategoryProblem'

import { initState } from '../../ducks/InitState'
import { categoryProblem } from '../../mocks/data'

describe('action', () => {
    it('addCategory', () => {
        expect(addCategory(categoryProblem[0])).toMatchSnapshot()
    })

    it('resetCategory', () => {
        expect(resetCategory()).toMatchSnapshot()
    })
})

describe('reducer', () => {
    it('ADD_CATEGORY', () => {
        expect(reducer(initState, addCategory(categoryProblem[0]))).toMatchSnapshot()
    })

    it('RESET_CATEGORY', () => {
        expect(reducer(initState, resetCategory())).toMatchSnapshot()
    })

    it('default', () => {
        expect(reducer(initState, {
            type: 'default'
        })).toMatchSnapshot()
    })
})