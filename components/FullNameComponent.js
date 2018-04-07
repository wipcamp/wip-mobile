import React, { Component } from 'react'
import { View, Text } from 'react-native'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'

class FullName extends Component {
    render() {
        return (
            <View
                style={[
                    LayoutStyles.padT10,
                    LayoutStyles.row,
                    LayoutStyles.justifyCenter,
                    ColorStyles.bgWhite
                ]}
            >
                <Text
                    style={[
                        TextStyles.kanit,
                        TextStyles.size16
                    ]}
                >
                    { this.props.children }
                </Text>
            </View>
        )
    }
}

export default FullName