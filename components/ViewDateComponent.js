import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Styles from '../styles/ViewProblemStyle'
import ReportStyle from '../styles/reportProblemStyle'

class ViewDate extends Component {
    render() {
        return (
            <View
                style={[
                    ReportStyle.bgWhite,
                    ReportStyle.inputPadding,
                    ReportStyle.spacesTop,
                    Styles.row,
                    Styles.heightLabel,
                    Styles.border
                ]}
            >
                <View style={[Styles.flex1]}>
                    <Text style={Styles.topic}>Date</Text>
                </View>
                <View style={[Styles.flex1, Styles.itemRight]}>
                    <Text style={Styles.description}>{this.__renderDateValue()}</Text>
                </View>
            </View>
        )
    }

    __renderDateValue() {
        let dateValue = this.props.problem
                        .filter(problem => problem.id == this.props.id)
                        [0].created_at
                        .split(" ")[0]
                        .split("-")
                        .join("/")
        return dateValue
    }
}

export default ViewDate