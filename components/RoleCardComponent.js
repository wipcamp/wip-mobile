import React, { Component } from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'

import Styles from '../styles/TimetableStyle'
import ViewStyles from '../styles/ViewProblemStyle'
import arrow from '../src/images/arrow-right.png'

class RoleCard extends Component {
    render() {
        return (
            <TouchableOpacity
                style={[
                    Styles.row,
                    Styles.alignCenter,
                    Styles.justifySpaceBet,
                    Styles.card
                ]}
                onPress={this.props.onPressFunction}
            >
                <Text style={ViewStyles.topic}>{this.props.title}</Text>
                <Image
                    source={arrow}
                    style={[Styles.arrow, ViewStyles.itemRight]}
                />
            </TouchableOpacity>
        )
    }
}

export default RoleCard