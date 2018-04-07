import React, { Component } from 'react'
import { View, Text } from 'react-native'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'

class ProfileData extends Component {
    render() {
        return (
            <View
                style={[
                    LayoutStyles.row,
                    (this.props.first ? LayoutStyles.padT5 : null),
                    ColorStyles.bgWhite
                ]}
            >
                <View style={LayoutStyles.flex02} />
                <View style={LayoutStyles.flex03}>
                    <Text
                        style={[
                            // LayoutStyles.padR07P,
                            TextStyles.kanit,
                            TextStyles.size16,
                            TextStyles.left
                        ]}
                    >
                        { this.props.title }
                    </Text>
                </View>
                <View style={LayoutStyles.flex05}>
                    <Text
                        style={[
                            TextStyles.kanit,
                            TextStyles.size16,
                        ]}
                    >
                        : { this.props.detail }
                    </Text>
                </View>
            </View>
        )
    }
}

export default ProfileData