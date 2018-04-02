import React, { Component } from 'react'
import { AsyncStorage, View, Text, Image } from 'react-native'

import { getByName as roleGetByName } from '../utils/apiRole'

import Menu from '../components/MenuComponent'
import Styles from '../styles/MainPageStyle'
import ReportStyle from '../styles/reportProblemStyle'

import WipLogo from '../src/images/Logo_WIPCamp.png'

class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userProfile: null
        }
    }

    async componentWillMount() {
        let user = await AsyncStorage.getItem('user')
        user = JSON.parse(user)
        this.setState({userProfile: user})
        this.props.setReportId(this.state.userProfile.user_id)

        let token = await AsyncStorage.getItem('apiToken')
        console.log('token : ', token)
    }

    render() {
        return (
            <View style={[ReportStyle.bg, Styles.column]}>
                <View 
                    style={[
                        Styles.row,
                        Styles.flex01,
                        Styles.justifyEnd,
                        Styles.alignCenter,
                        Styles.padTop20,
                        Styles.marginRight10
                    ]}
                >
                    <Text style={Styles.marginRight10}>
                        { this.state.userProfile 
                            ? this.state.userProfile.nickname
                            : null
                        }
                    </Text>
                    { this.state.userProfile
                        ? this.__renderProfileImg()
                        : null
                    }
                </View>
                <View style={Styles.flex21}>
                    <Image
                        source = { WipLogo }
                        style = { Styles.wipLogo }
                    />
                </View>
                <Menu
                    leftIcon = { require('../src/images/calendar.png') }
                    leftText = "TIME SCHEDULE"
                    leftFunction = {() => this.props.navigation.navigate('Timetable')}
                    rightIcon = { require('../src/images/megaphone.png') }
                    rightText = "NOTIFICATION"
                    rightFunction = {() => this.props.navigation.navigate('Notification')}
                />
                <Menu
                    leftIcon = { require('../src/images/file.png') }
                    leftText = "VIEW PROBLEM"
                    leftFunction = {() => this.props.navigation.navigate('AllProblem')}
                    rightIcon = { require('../src/images/pen.png') }
                    rightText = "REPORT PROBLEM"
                    rightFunction = {() => this.props.navigation.navigate('ReportProblem')}
                />
                <Menu
                    leftIcon = { require('../src/images/gear.png') }
                    leftText = "SETTING"
                    leftFunction = {() => this.props.navigation.navigate('NotAvailable')}
                    rightIcon = { require('../src/images/log-out.png') }
                    rightText = "LOGOUT"
                    rightFunction = {async () => {
                        await AsyncStorage.removeItem('user')
                        await AsyncStorage.removeItem('loginFBID')
                        await AsyncStorage.removeItem('loginFBToken')
                        this.props.navigation.navigate('Login')
                    }}
                    end
                />
            </View>
        )
    }

    __renderProfileImg() {
        return <Image 
            source={{uri: this.state.userProfile.pic}}
            style={[
                Styles.profileImg,
                Styles.borderRadius10
            ]}
        />
    }
}

export default MainPage
