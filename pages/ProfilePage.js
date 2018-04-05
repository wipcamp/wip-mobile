import React, { Component } from 'react'
import { AsyncStorage, ScrollView, View, TouchableOpacity, Text, Image, FlatList } from 'react-native'
import { Icon } from 'native-base'

import { get as roleteamGet } from '../utils/apiRoleTeam'

import Banner from '../components/ProfileBannerComponent'
import FullName from '../components/FullNameComponent'
import Nickname from '../components/NicknameComponent'
import RoleCard from '../components/RoleCardComponent'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'

const role = [
    {
        name: 'พี่ไอติม',
        ios: 'ios-ice-cream',
        android: 'md-ice-cream'
    },
    {
        name: 'พี่วิชาการ',
        ios: 'ios-school',
        android: 'md-school'
    },
    {
        name: 'พี่สวัสดิการ',
        ios: 'ios-restaurant',
        android: 'md-restaurant'
    },
    {
        name: 'พี่สถานที่',
        ios: 'ios-pin',
        android: 'md-pin'
    },
    {
        name: 'พี่MC',
        ios: 'ios-microphone',
        android: 'md-microphone'
    },
    {
        name: 'กองอำนวยการ',
        ios: 'ios-megaphone',
        android: 'md-megaphone'
    },
    {
        name: 'คนนำทางน้อง',
        ios: 'ios-compass',
        android: 'md-compass'
    },
    {
        name: 'พี่พยาบาล',
        ios: 'ios-medkit',
        android: 'md-medkit'
    },
    {
        name: 'พี่ตากล้อง',
        ios: 'ios-camera',
        android: 'md-camera'
    }
]

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null,
            role: []
        }
    }

    async componentWillMount() {
        let user = await AsyncStorage.getItem('user')
        user = JSON.parse(user)
        this.setState({
            user: user
        })
        user.roleteams.map( async rt => {
            let data = await roleteamGet(rt)
            this.setState({
                role: [...this.state.role, data.description]
            })
        })
    }

    render() {
        return (
            <ScrollView
                style={[
                    LayoutStyles.column,
                    LayoutStyles.flex1,
                    ColorStyles.bgGrey
                ]}
            >
                <Banner
                    profile={ this.state.user
                        ? {uri: this.state.user.pic}
                        : null
                    }
                />
                <View
                    style={[
                        LayoutStyles.flex07,
                        LayoutStyles.column
                    ]}
                >
                    <FullName>
                        { this.state.user
                            ? `${this.state.user.first_name} ${this.state.user.last_name}`
                            : null
                        }
                    </FullName>
                    <Nickname>
                        { this.state.user
                            ? `(${this.state.user.nickname})`
                            : null
                        }
                    </Nickname>
                        { this.state.user
                            ? this.__renderRoleteam()
                            : null
                        }
                    <TouchableOpacity
                        style={[
                            LayoutStyles.row,
                            LayoutStyles.alignCenter,
                            LayoutStyles.justifyCenter,
                            LayoutStyles.maTop20,
                            LayoutStyles.padTB10,
                            ColorStyles.bgWhite
                        ]}
                        onPress={async () => {
                            await AsyncStorage.removeItem('user')
                            await AsyncStorage.removeItem('loginFBID')
                            await AsyncStorage.removeItem('loginFBToken')
                            this.props.navigation.navigate('Login')
                        }}
                    >
                        <Icon
                            ios='ios-log-out'
                            android='md-log-out'
                            style={ColorStyles.textRed}
                        />
                        <Text
                            style={[
                                LayoutStyles.padL15,
                                TextStyles.kanit,
                                TextStyles.size18,
                                ColorStyles.textRed
                            ]}
                        >
                            Log out
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

    __renderRoleteam() {
        return (
            <View
                style={[
                    LayoutStyles.padTB10,
                    LayoutStyles.padLR10,
                    LayoutStyles.column,
                    LayoutStyles.justifyCenter,
                    ColorStyles.bgWhite
                ]}
            >
                <View
                    style={LayoutStyles.row}
                >
                    <View style={LayoutStyles.flex02} />
                    <View style={LayoutStyles.flex03}>
                        <Text
                            style={[
                                LayoutStyles.padR07P,
                                LayoutStyles.maBot5,
                                TextStyles.kanit,
                                TextStyles.size16,
                                TextStyles.center
                            ]}
                        >
                            ตำแหน่ง :
                        </Text>
                    </View>
                    <View style={LayoutStyles.flex05} />
                </View>
                
                { this.state.role.map( (r, i) => {
                    let index = role.findIndex( ro => ro.name == r)
                    if( index != -1 ) {
                        return (
                            <RoleCard
                                key={i}
                                ios={role[index].ios}
                                android={role[index].android}
                                role={r}
                            />
                        )
                    }
                    else {
                        return (
                            <RoleCard
                                key={i}
                                ios='ios-person'
                                android='md-person'
                                role={r}
                            />
                        )
                    }
                }) }
            </View>
        )
    }
}

export default Profile