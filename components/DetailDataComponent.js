import React, { Component } from 'react'
import { View, Text } from 'react-native'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'

class DetailData extends Component {
    render() {
        return (
            <View
                style={[
                    LayoutStyles.padTB10,
                    LayoutStyles.padLR10,
                    LayoutStyles.row,
                    ColorStyles.bgWhite,
                    ColorStyles.borderBotBlack062
                ]}
            >
                {this.props.children}
            </View>
        )
    }
}

export default DetailData