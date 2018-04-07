import { initState } from './InitState'

const ADD_NOTIFICATION = "ADD_NOTIFICATION"
const REVERSE_NOTIFICATION = "REVERSE_NOTIFICATION"
const RESET_NOTIFICATION = "RESET_NOTIFICATION"

export default function reducer (state = initState, action) {
    switch (action.type) {
        case ADD_NOTIFICATION:
            return {
                notification: [
                    ...state.notification,
                    action.notification
                ]
            }
        case REVERSE_NOTIFICATION:
            return {
                notification: state.notification.sort((a, b) =>  a.created_at.localeCompare(b.created_at) * -1)
            }
        case RESET_NOTIFICATION:
            return {
                notification: []
            }
        default:
            return state
    }
}

export const addNotification = notification => ({
    type: ADD_NOTIFICATION,
    notification
})

export const reverseNotification = () => ({
    type: REVERSE_NOTIFICATION
})

export const resetNotification = () => ({
    type: RESET_NOTIFICATION
})