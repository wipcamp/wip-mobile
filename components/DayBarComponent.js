import React, { Component } from 'react'
import { View } from 'react-native'

import DayBox from './ConnectDayBoxComponent'

import Styles from '../styles/TimetableStyle'

class DayBar extends Component {
    render() {
        return (
            <View style={[Styles.row]}>
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