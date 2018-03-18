import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Styles from '../styles/ViewProblemStyle'
import ReportStyle from '../styles/reportProblemStyle'

class ViewData extends Component {
    render() {
        return (
            <View
                style={[
                    ReportStyle.bgWhite,
                    ReportStyle.inputPadding,
                    Styles.row,
                    Styles.heightLabel,
                    Styles.border
                ]}
            >
                <View style={[Styles.flex1]}>
                    <Text>{this.props.left}</Text>
                </View>
                <View style={[Styles.flex1, Styles.itemRight]}>
                    <Text>{this.props.right}</Text>
                </View>
            </View>
        )
    }
}

export default ViewData