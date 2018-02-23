import { AsyncStorage } from 'react-native'

import api from './api'

export const auth = async (facebookId, facebookToken) => {
    let sendData = {
        id: facebookId,
        accessToken: facebookToken
    }
    let { data } = await api.post('/auth/login', sendData, null)
    await AsyncStorage.setItem('apiToken', `${data.accessToken}`)
}

export const refresh = async () => {
    const fbid = await AsyncStorage.getItem('loginFBID')
    const fbtoken = await AsyncStorage.getItem('loginFBToken')
    await auth(fbid, fbtoken)
}

export const getToken = async () => (
    await AsyncStorage.getItem('apiToken')
)