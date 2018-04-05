import React, { Component } from 'react'
import { View, Image } from 'react-native'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import ImageStyles from '../styles/ImageStyle'

import Banner from '../src/images/bannerWIPXS.png'

class ProfileBanner extends Component {
    render() {
        return (
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
                        LayoutStyles.overHid
                    ]}
                >
                    <Image
                        source={Banner}
                        style={ImageStyles.profileBanner}
                    />
                </View>
                <View
                    style={[
                        LayoutStyles.f03w100h25,
                        ColorStyles.bgWhite
                    ]}
                />
                <Image
                    source={ this.props.profile }
                    style={ImageStyles.profileImg}
                />
            </View>
        )
    }
}

export default ProfileBanner