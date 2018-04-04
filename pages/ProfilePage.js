import React, { Component } from 'react'
import { AsyncStorage, ScrollView, View, TouchableOpacity, Text, Image, FlatList } from 'react-native'
import { Icon } from 'native-base'

import { get as roleteamGet } from '../utils/apiRoleTeam'

import DetailData from '../components/DetailDataComponent'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'
import ImageStyles from '../styles/ImageStyle'

import Banner from '../src/images/Logo_WIPCamp.png'

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
        console.log(user)
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
                <View
                    style={[
                        LayoutStyles.flex03,
                        LayoutStyles.column,
                        ColorStyles.bgWhite
                    ]}
                >
                    <View
                        style={[
                            LayoutStyles.f03w100h75,
                            LayoutStyles.overHid,
                            ColorStyles.bgOrange
                        ]}
                    >
                        {/* <Image
                            source={Banner}
                            style={ImageStyles.profileBanner}
                        /> */}
                    </View>
                    <View
                        style={[
                            LayoutStyles.f03w100h25,
                            ColorStyles.bgWhite
                        ]}
                    />
                    <Image
                        source={ this.state.user
                            ? {uri: this.state.user.pic}
                            : null
                        }
                        style={ImageStyles.profileImg}
                    />
                </View>
                <View
                    style={[
                        LayoutStyles.flex07,
                        LayoutStyles.column
                    ]}
                >
                    <DetailData>
                        <Text
                            style={[
                                TextStyles.kanit,
                                TextStyles.size16
                            ]}
                        >
                            ชื่อ-สกุล : { this.state.user
                                ? `${this.state.user.first_name} ${this.state.user.last_name}`
                                : null
                            }
                        </Text>
                    </DetailData>
                    <DetailData>
                        <Text
                            style={[
                                TextStyles.kanit,
                                TextStyles.size16
                            ]}
                        >
                            ชื่อเล่น : { this.state.user
                                ? this.state.user.nickname
                                : null
                            }
                        </Text>
                    </DetailData>
                    <DetailData>
                        { this.state.user
                            ? this.__renderRoleteam()
                            : null
                        }
                    </DetailData>
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
                style={LayoutStyles.column}
            >
                <Text style={TextStyles.size16}>หน้าที่ :</Text>
                { this.state.role.map( (r, i) => 
                    <Text
                        style={[
                            LayoutStyles.padL10,
                            TextStyles.kanit,
                            TextStyles.size16
                        ]}
                        key={i}
                    >
                        - {r}
                    </Text>
                ) }
            </View>
        )
    }
}

export default Profile