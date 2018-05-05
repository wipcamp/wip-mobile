import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, AsyncStorage } from 'react-native'
import { Facebook } from 'expo'

import env from '../config'

import { auth } from '../utils/apiAuth'
import { get as getUser } from '../utils/apiUser'
import { get as getProfile } from '../utils/apiProfile'
import { getByUserId as getRoleByUserId } from '../utils/apiUserRole'
import { getByUserId as getRoleTeamByUserId } from '../utils/apiUserRoleTeam'

import { registerPushNotiAsync } from '../utils/Notification'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import ImageStyles from '../styles/ImageStyle'
import TextStyles from '../styles/TextStyles'
import ComponentStyles from '../styles/ComponentStyle'

import WipLogo from '../src/images/Logo_WIPCamp.png'
import FacebookLogo from '../src/images/facebook-logo.png'

class Login extends Component {
    render() {
        return (
            <View
                style={[
                    LayoutStyles.flex1,
                    LayoutStyles.justifyCenter,
                    LayoutStyles.alignCenter,
                    ColorStyles.bgGrey
                ]}
            >
                <Image 
                    source={ WipLogo }
                    style={ ImageStyles.wipLogo }
                />
                <TouchableOpacity
                    style={[
                        ComponentStyles.facebookButton,
                        LayoutStyles.justifyStart,
                        LayoutStyles.row
                    ]}
                    onPress={ this._handlePressAsync } 
                >
                    <Image
                        source = { FacebookLogo }
                        style = { ImageStyles.facebookLogo }
                    />
                    <Text
                        style={[
                            LayoutStyles.maTop5,
                            ColorStyles.textWhite,
                            TextStyles.kanit
                        ]}
                    >
                        Facebook Login
                    </Text>
                </TouchableOpacity>
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
            return
        }
        
        const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture.type(large)`
        )
        
        const userInfo = await response.json()
        try {
            await auth(userInfo.id, token)
        }
        catch (error) {
            alert('You may not be a part of WIP Camp')
            return
        }
        await AsyncStorage.setItem('loginFBID', `${userInfo.id}`)
        await AsyncStorage.setItem('loginFBToken', `${token}`)
        
        let user = await getUser(userInfo.id, token)
        let profile = await getProfile(user.id)

        await registerPushNotiAsync(profile.user_id)
        
        profile.pic = userInfo.picture.data.url
        profile.roles = []
        profile.roleteams = []
        
        let role = await getRoleByUserId(profile.user_id)
        role.map(data => {
            profile.roles.push(data.role_id)
        })

        let roleTeam = await getRoleTeamByUserId(profile.user_id)
        roleTeam.map(data => {
            profile.roleteams.push(data.role_team_id)
        })

        await AsyncStorage.setItem('user', JSON.stringify(profile))

        this.props.navigation.navigate('app')
    }
}

export default Login
