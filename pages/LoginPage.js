import React, { Component } from 'react'
import { View, Text, Button, Image, StyleSheet } from 'react-native'
import { Facebook } from 'expo'

import env from '../config'
import Styles from '../styles/LoginStyle'
import WipLogo from '../src/images/Logo_WIPCamp.png'

class Login extends Component {
    static navigationOptions = {
        tabBarVisible: true
    }

    state = {
        userInfo: null
    }

    render() {
        return (
            <View style = {Styles.container}>
                <Image 
                    source = { WipLogo }
                    style = { Styles.logo }
                />
                {!this.state.userInfo ? (
                    <Button title="Facebook Login" onPress={this._handlePressAsync} />
                ) : (
                    this._renderUserInfo()
                )}
            </View>
        )
    }

    _renderUserInfo = () => {
        return (
            <View style={{ alignItems: 'center' }}>
                <Image
                    source={{ uri: this.state.userInfo.picture.data.url }}
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                />
                <Text style={{ fontSize: 20 }}>{this.state.userInfo.name}</Text>
                <Text>ID: {this.state.userInfo.id}</Text>
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
        this.setState({ userInfo })
    }
}

export default Login
