import React, { Component } from 'react'
import { View, Text, Image, Button, AsyncStorage} from 'react-native'
import { Facebook } from 'expo'

import env from '../config'
import { auth } from '../utils/apiAuth'
import { get as getUser } from '../utils/apiUser'
import { get as getProfile } from '../utils/apiProfile'
import { getByUserId as getRoleByUserId } from '../utils/apiUserRole'
import Styles from '../styles/LoginStyle'
import WipLogo from '../src/images/Logo_WIPCamp.png'

class Login extends Component {
    static navigationOptions = {
        tabBarVisible: true
    }

    async componentWillMount() {
        let user = await AsyncStorage.getItem('user')
        if(user) {
            this.props.navigation.navigate('Main')
        }
    }

    render() {
        return (
            <View style = {Styles.container}>
                <Image 
                    source = { WipLogo }
                    style = { Styles.logo }
                />
                <Button title="Facebook Login" onPress={this._handlePressAsync} />
            </View>
        )
    }

    _handlePressAsync = async () => {
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(
            `${env.FB_APP_ID}`, 
            {
                permissions: ['public_profile'],
                behavior: 'web'
            }
        )

        if (type !== 'success') {
            alert('Uh oh, something went wrong')
            return
        }
        
        const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`
        )
        
        const userInfo = await response.json()
        await auth(userInfo.id, token)

        await AsyncStorage.setItem('loginFBID', `${userInfo.id}`)
        await AsyncStorage.setItem('loginFBToken', `${token}`)
        
        let user = await getUser(userInfo.id, token)
        let profile = await getProfile(user.id)
        
        profile.pic = userInfo.picture.data.url
        profile.roles = []
        
        let role = await getRoleByUserId(profile.user_id)
        role.map(data => {
            profile.roles.push(data.role_id)
        })

        await AsyncStorage.setItem('user', JSON.stringify(profile))

        this.props.navigation.navigate('Main')
    }
}

export default Login
