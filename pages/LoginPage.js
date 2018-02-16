import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Facebook } from 'expo'

import env from '../config'
import Styles from '../styles/LoginStyle'
import ViewProblemStyle from '../styles/ViewProblemStyle'
import WipLogo from '../src/images/Logo_WIPCamp.png'
import FacebookLogo from '../src/images/facebook-logo.png'

class Login extends Component {
    static navigationOptions = {
        tabBarVisible: true
    }

    state = {
        userInfo: null
    }

    render() {
        return (
            <View style = { Styles.container }>
                <Image 
                    source = { WipLogo }
                    style = { Styles.logo }
                />
                {!this.state.userInfo ? (
                    <TouchableOpacity
                        style = { [Styles.facebookButton, Styles.viewFBButton, ViewProblemStyle.row] }
                        onPress={ this._handlePressAsync } 
                    >
                        {/* <View style={[ViewProblemStyle.row]}> */}
                            <Image 
                                source = { FacebookLogo }
                                style = { [Styles.facebookLogo]}
                            />
                            <Text style={ [Styles.loginText] }>Facebook Login</Text>
                        {/* </View> */}
                    </TouchableOpacity>
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
