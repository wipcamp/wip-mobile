import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon } from 'native-base'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'

class RoleCard extends Component {
    render() {
        return (
            <View
                style={LayoutStyles.row}
                key={this.props.key}
            >
                <View style={LayoutStyles.flex02} />
                <View
                    style={LayoutStyles.flex02}
                >
                    <Icon
                        ios={this.props.ios}
                        android={this.props.android}
                        style={[
                            TextStyles.right,
                            ColorStyles.textOrange
                        ]}
                    />
                </View>
                <View
                    style={LayoutStyles.flex06}
                >
                    <Text
                        style={[
                            LayoutStyles.padL06P,
                            TextStyles.size16,
                            TextStyles.kanit
                        ]}
                    >
                        {this.props.role}
                    </Text>
                </View>
            </View>
        )
    }
}

export default RoleCard