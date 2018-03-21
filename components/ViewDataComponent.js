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
                    ReportStyle.spacesTop,
                    Styles.row,
                    Styles.heightLabel,
                    Styles.border,
                    Styles.heightLabel
                ]}
            >
                <View style={[Styles.flex1]}>
                    <Text style={Styles.topic}>{this.props.left}</Text>
                </View>
                <View style={[Styles.flex1, Styles.itemRight]}>
                    <Text style={Styles.description}>{this.props.right}</Text>
                </View>
            </View>
        )
    }
}

export default ViewData