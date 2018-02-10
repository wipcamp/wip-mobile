import { AsyncStorage } from 'react-native'

import api from './api'

export const auth = async (facebookId, facebookToken) => {
    let sendData = {
        id: facebookId,
        accessToken: facebookToken
    }
    let { data } = await api.post('/auth/login', sendData, null)
    AsyncStorage.setItem('apiToken', `${data}`)
}

export const getToken = () => (
    AsyncStorage.getItem('apiToken')
)