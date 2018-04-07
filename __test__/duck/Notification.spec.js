/**
 * @jest-environment node
 */

import reducer, {
    addNotification,
    reverseNotification,
    resetNotification
} from '../../ducks/Notification'

import { initState } from '../../ducks/InitState'
import { notification } from '../../mocks/data'

describe('action', () => {
    it('addNotification', () => {
        expect(addNotification(notification[0])).toMatchSnapshot()
    })

    it('reverseNotification', () => {
        expect(reverseNotification()).toMatchSnapshot()
    })

    it('resetNotification', () => {
        expect(resetNotification()).toMatchSnapshot()
    })
})

describe('reducer', () => {
    it('ADD_NOTIFICATION', () => {
        expect(reducer(initState, addNotification(notification[0]))).toMatchSnapshot()
    })

    it('REVERSE_NOTIFICATION', () => {
        expect(reducer(initState, reverseNotification())).toMatchSnapshot()
    })

    it('RESET_NOTIFICATION', () => {
        expect(reducer(initState, resetNotification())).toMatchSnapshot()
    })

    it('default', () => {
        expect(reducer(initState, {
            type: 'default'
        })).toMatchSnapshot()
    })
})