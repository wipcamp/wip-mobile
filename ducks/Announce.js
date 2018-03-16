import { initState } from './InitState'

const ADD_ANNOUNCE = "ADD_ANNOUNCE"
const REVERSE_ANNOUNCE = "REVERSE_ANNOUNCE"
const UPDATE_ANNOUNCE = "UPDATE_ANNOUNCE"
const RESET_ANNOUNCE = "RESET_ANNOUNCE"

export default function reducer (state = initState, action) {
    switch (action.type) {
        case ADD_ANNOUNCE :
            return {
                announce: [
                    ...state.announce,
                    action.announce
                ]
            }
        case REVERSE_ANNOUNCE :
            return {
                announce: state.announce.reverse()
            }
        case UPDATE_ANNOUNCE :
            return {
                announce : state.announce.map(announce => {
                    if(announce.id == action.announce.id) {
                        return announce = action.announce
                    }
                    return announce
                })
            }
        case RESET_ANNOUNCE :
            return {
                announce: []
            }
        default :
            return state
    }
}

export const addAnnounce = announce => ({
    type: ADD_ANNOUNCE,
    announce
})

export const setAnnounce = announce => ({
    type: UPDATE_ANNOUNCE,
    announce
})

export const reverseAnnounce = () => ({
    type: REVERSE_ANNOUNCE
})

export const resetAnnounce = () => ({
    type: RESET_ANNOUNCE
})