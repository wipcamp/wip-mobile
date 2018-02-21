import { AsyncStorage } from 'react-native'

import api from './api'

export const auth = async (facebookId, facebookToken) => {
    let sendData = {
        id: facebookId,
        accessToken: facebookToken
    }
    let { data } = await api.post('/auth/login', sendData, null)
    console.log('API Token : ', data.accessToken)
    await AsyncStorage.setItem('apiToken', `${data.accessToken}`)
}

export const refresh = async () => {
    console.log('start refresh api token')
    let { data } = await api.post('/auth/refresh', null, {Authorization: `Bearer ${await getToken()}`})
    console.log('new api token : ', data)
    await AsyncStorage.setItem('apiToken', `${data.accessToken}`)
}

export const getToken = async () => (
    await AsyncStorage.getItem('apiToken')
)