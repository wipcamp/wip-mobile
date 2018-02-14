import { AsyncStorage } from 'react-native'

export default async function checkLogin() {
    const user = await AsyncStorage.getItem('user')
    if(user == null) {
        return false
    }
    return true
}