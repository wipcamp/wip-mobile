import React, { Component } from 'react'
import { View, Text } from 'react-native'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'

class DetailDescription extends Component {
    render() {
        return (
            <View
                style={[
                    LayoutStyles.padTB10,
                    LayoutStyles.padB17,
                    LayoutStyles.padLR10,
                    ColorStyles.bgWhite,
                    ColorStyles.borderBotBlack062
                ]}
            >
                <Text style={TextStyles.size18}>รายละเอียด :</Text>
                {this.props.children}
            </View>
        )
    }
}

export default DetailDescription