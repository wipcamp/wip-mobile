import React, { Component } from 'react'
import { View, Text, Image, Button, AsyncStorage} from 'react-native'
import { Facebook } from 'expo'

import env from '../config'
import { auth } from '../utils/apiAuth'
import Styles from '../styles/LoginStyle'
import WipLogo from '../src/images/Logo_WIPCamp.png'

class Login extends Component {
    static navigationOptions = {
        tabBarVisible: true
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
        const { type, token } = await Facebook.logInWithReadPermissionsAsync(`${env.FB_APP_ID}`, {
            permissions: ['public_profile']
          })

        if (type !== 'success') {
            alert('Uh oh, something went wrong')
            return
        }
        const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`
        )
        const userInfo = await response.json()
        console.log('fbid : ', userInfo.id)
        console.log('fbtoken : ', token)
        await auth(userInfo.id, token)
        
        // let user = await 
    }
}

export default Login
