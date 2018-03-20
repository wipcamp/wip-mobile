import React, { Component } from 'react'
import { View } from 'react-native'

import DayBox from './ConnectDayBoxComponent'

import Styles from '../styles/TimetableStyle'
import ReportStyles from '../styles/reportProblemStyle'
import ViewStyles from '../styles/ViewProblemStyle'

class DayBar extends Component {
    render() {
        return (
            <View 
                style={[
                    Styles.row,
                    ReportStyles.spacesBottom,
                ]}
            >
                <DayBox
                    day={30}
                    month="May"
                />
                <DayBox
                    day={31}
                    month="May"
                />
                <DayBox
                    day={1}
                    month="Jun"
                />
                <DayBox
                    day={2}
                    month="Jun"
                />
                <DayBox
                    day={3}
                    month="Jun"
                    last
                />
            </View>
        )
    }
}

export default DayBar