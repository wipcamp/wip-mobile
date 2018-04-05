import React, { Component } from 'react'
import { AsyncStorage, View, Text, Image, Alert, Dimensions } from 'react-native'

import { get as roleteamGet } from '../utils/apiRoleTeam'

import MenuBar from '../components/MenuBarComponent'
import MenuIcon from '../components/MenuIconComponent'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'
import ImageStyles from '../styles/ImageStyle'
import ComponentStyles from '../styles/ComponentStyle'

import Banner from '../src/images/bannerWIPX.png'

class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userProfile: null,
            isNurse: false
        }
    }

    async componentWillMount() {
        console.log('height : ', Dimensions.get('screen').height)
        let user = await AsyncStorage.getItem('user')
        if(!user) {
            this.props.navigation.navigate('Login')
        }
        user = JSON.parse(user)
        let roleteams = user.roleteams
        roleteams.map(async roleteam => {
            let data = await roleteamGet(roleteam)
            if (data.display_name == 'NURSE') {
                this.setState({
                    isNurse: true
                })
            }
        })
        this.setState({userProfile: user})
        this.props.setReportId(this.state.userProfile.user_id)

        let token = await AsyncStorage.getItem('apiToken')
        console.log('token : ', token)
    }

    render() {
        return (
            <View
                style={[
                    LayoutStyles.flex1,
                    LayoutStyles.column,
                    ColorStyles.bgGrey
                ]}
            >
                <View
                    style={[
                        LayoutStyles.flex045,
                        LayoutStyles.overHid
                    ]}
                >
                    <Image
                        source = { Banner }
                        style = { ImageStyles.bannerMain }
                    />
                </View>
                <MenuBar top>
                    <MenuIcon
                        icon={ require('../src/images/calendar.png') }
                        text='ตารางเวลา'
                        function={ () => this.props.navigation.navigate('Timetable') }
                        two={!this.state.isNurse}
                    />
                    {this.state.isNurse
                        ? this.__renderQr()
                        : null
                    }
                </MenuBar>
                <MenuBar>
                    <MenuIcon
                        icon={ require('../src/images/file.png') }
                        text='ดูปัญหา'
                        function={() => this.props.navigation.navigate('AllProblem')}
                    />
                    <MenuIcon
                        icon={ require('../src/images/pen.png') }
                        text='แจ้งปัญหา'
                        function={ () => this.props.navigation.navigate('ReportProblem') }
                    />
                </MenuBar>
            </View>
        )
    }

    __renderQr() {
        return (
            <MenuIcon
                icon={ require('../src/images/qr.png') }
                text='แสกน QR'
                function={ () => this.props.navigation.navigate('QrScan') }
            />
        )
    }
}

export default MainPage
