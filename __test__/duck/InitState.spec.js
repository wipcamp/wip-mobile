/**
 * @jest-environment node
 */

import reducer, {
    initState,
    SET_INIT
} from '../../ducks/InitState'

describe('action', () => {
    it('SET_INIT', () => {
        expect(SET_INIT()).toMatchSnapshot()
    })
})

describe('reducer', () => {
    it('SET_INIT', () => {
        expect(reducer(initState, SET_INIT())).toMatchSnapshot()
    })

    it('default', () => {
        expect(reducer(initState, {
            type: 'default'
        })).toMatchSnapshot()
    })
})