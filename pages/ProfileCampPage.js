import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'

import { get as profileGet } from '../utils/apiProfile'

import Banner from '../components/ProfileBannerComponent'
import FullName from '../components/FullNameComponent'
import Nickname from '../components/NicknameComponent'
import ProfileData from '../components/ProfileDataComponent'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'
import ImageStyles from '../styles/ImageStyle'

import WiPIcon from '../src/images/wippo_happy.png'

class ProfileCamp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            profile: null
        }
    }

    async componentDidMount() {
        let data = await profileGet(this.props.navigation.state.params.id)
        this.setState({
            profile: data
        })
        console.log('data : ', data)
    }

    render() {
        return (
            <ScrollView
                style={[
                    LayoutStyles.column,
                    LayoutStyles.flex1,
                    ColorStyles.bgWhite
                ]}
            >
                <Banner
                    profile={ WiPIcon }
                />
                <View
                    style={[
                        LayoutStyles.flex07,
                        LayoutStyles.column
                    ]}
                >
                    <FullName>
                        { this.state.profile
                            ? `${this.state.profile.first_name} ${this.state.profile.last_name}`
                            : null
                        }
                    </FullName>
                    <Nickname>
                        { this.state.profile
                            ? `(${this.state.profile.nickname})`
                            : null
                        }
                    </Nickname>
                    <ProfileData
                        title="กรุ๊ปเลือด"
                        detail={ this.state.profile
                            ? this.state.profile.blood_group
                            : null
                        }
                        first
                    />
                    <ProfileData
                        title="โรคประจำตัว"
                        detail={ this.state.profile
                            ? this.state.profile.congenital_diseases
                            : null
                        }
                    />
                    <ProfileData
                        title="แพ้อาหาร"
                        detail={ this.state.profile
                            ? this.state.profile.allergic_foods
                            : null
                        }
                    />
                    <ProfileData
                        title="แพ้ยา"
                        detail={ this.state.profile
                            ? this.state.profile.congenital_drugs
                            : null
                        }
                    />
                </View>
            </ScrollView>
        )
    }
}

export default ProfileCamp