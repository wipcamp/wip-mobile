import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'

import DayBar from '../components/DayBarComponent'

import Styles from '../styles/TimetableStyle'

class Timetable extends Component {
    static navigationOptions = {
        title: 'Time Schedule'
    }

    render() {
        return (
            <ScrollView>
                <DayBar />
            </ScrollView>
        )
    }
}

export default Timetable