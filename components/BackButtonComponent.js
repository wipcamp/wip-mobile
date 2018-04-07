import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyle from '../styles/ColorStyle'

class BackButton extends Component { 
    render() {
        return (
            <TouchableOpacity
                style={LayoutStyles.padL10}
                onPress={() => this.props.navigation.goBack(null)}
            >
                <Icon ios='ios-arrow-back' android='md-arrow-round-back' style={ColorStyle.textOrange} />
            </TouchableOpacity>
        )
    }
}

export default BackButton