import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'

import { getByDate as timetableGetByDate } from '../utils/apiTimetable'

import HourBG from '../components/HourBGComponent'
import ListCardEvent from '../components/ConnectListCardEventComponent'
import EventCard from '../components/EventCardComponent'

import Styles from '../styles/TimetableStyle'
import ReportStyles from '../styles/reportProblemStyle'

class Timetable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            date: ''
        }
    }

    async componentWillMount() {
        let d = new Date(2018, 5, 1)
        let year = d.getFullYear()
        let month = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1
        let day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
        let date = `${year}-${month}-${day}`
        this.setState({
            date: date
        })
        this.props.resetTimetable()
        let datas = await timetableGetByDate(date)
        datas.map(data => {
            this.props.addTimetable(data)
        })
    }

    render() {
        return (
            <ScrollView style={ReportStyles.bg}>
                <View>
                    <Text>{this.state.date}</Text>
                </View>
                <View style={[ReportStyles.bgWhite, Styles.paddingTop10, Styles.paddingBottom10]}>
                    <HourBG />
                    <ListCardEvent />
                </View>
            </ScrollView>
        )
    }
}

export default Timetable