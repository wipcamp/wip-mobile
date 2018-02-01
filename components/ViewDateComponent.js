import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

import Styles from '../styles/ViewProblemStyle'
import ReportStyle from '../styles/reportProblemStyle'

const mapStateToProps = state => {
    return {
        problem : state.ReportReducer.problem
    }
}

class ViewDate extends Component {
    render() {
        return (
            <View
                style={[
                    ReportStyle.bgWhite,
                    ReportStyle.inputPadding,
                    ReportStyle.spacesTop,
                    Styles.row,
                    Styles.border
                ]}
            >
                <View style={[Styles.flex1]}>
                    <Text>Date</Text>
                </View>
                <View style={[Styles.flex1, Styles.itemRight]}>
                    <Text>{this.__renderDateValue()}</Text>
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

export default connect(mapStateToProps)(ViewDate)