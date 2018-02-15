import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { get as getProfile } from '../utils/apiProfile'
import Styles from '../styles/ViewProblemStyle'
import ReportStyle from '../styles/reportProblemStyle'

class ViewReporter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            report: ""
        }
    }

    async componentWillMount() {
        let data = await profileGet(this.__renderReporterId())
        this.setState({report: data.nickname})
    }

    render() {
        return (
            <View
                style={[
                    ReportStyle.bgWhite,
                    ReportStyle.inputPadding,
                    ReportStyle.spacesTop,
                    ReportStyle.spacesBottom,
                    Styles.row,
                    Styles.border
                ]}
            >
                <View style={[Styles.flex1]}>
                    <Text>Reporter</Text>
                </View>
                <View style={[Styles.flex1, Styles.itemRight]}>
                    <Text>{this.state.report}</Text>
                </View>
            </View>
        )
    }

    __renderReporterId() {
        let reportId = this.props.problem
                            .filter(problem => problem.id == this.props.id)
                            [0].report_id
        return reportId
    }
}

export default ViewReporter