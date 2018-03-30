import React, { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { Icon } from 'native-base'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'

class NotificationButton extends Component {
    render() {
        return (
            <TouchableOpacity
                style={LayoutStyles.maR10}
                onPress={() => this.props.navigation.navigate('Notification')}
            >
                <Icon
                    ios='ios-notifications'
                    android='md-notifications'
                    style={ColorStyles.textOrange}
                />
            </TouchableOpacity>
        )
    }
}

export default NotificationButton