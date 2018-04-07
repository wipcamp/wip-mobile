import React, { Component } from 'react'
import { View, Text } from 'react-native'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'

class DetailTopic extends Component {
    render() {
        return (
            <View
                style={[
                    LayoutStyles.padTB10,
                    LayoutStyles.padLR10,
                    ColorStyles.bgWhite,
                    ColorStyles.borderBotBlack04
                ]}
            >
                <Text
                    style={[
                        TextStyles.kanit,
                        TextStyles.size18,
                        TextStyles.bold
                    ]}
                >
                    {this.props.topic}
                </Text>
            </View>
        )
    }
}

export default DetailTopic