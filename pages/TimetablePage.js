import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'

import { getByName as roleTeamGetByName } from '../utils/apiRoleTeam'
import { getAll as timetableGetAll } from '../utils/apiTimetable'

import DayBar from '../components/DayBarComponent'
import HourBG from '../components/HourBGComponent'
import ListCardEvent from '../components/ConnectListCardEventComponent'
import EventCard from '../components/EventCardComponent'

import Styles from '../styles/TimetableStyle'
import ReportStyles from '../styles/reportProblemStyle'

class Timetable extends Component {
    static navigationOptions = {
        title: 'Time Schedule'
    }

    constructor(props) {
        super(props)
        this.state = {
            roleWipper: false
        }
    }

    async componentWillMount() {
        let id = await roleTeamGetByName('WIPPER')
        this.props.navigation.state.params.id == id
            ? this.setState({ roleWipper: true })
            : this.setState({ roleWipper: false })

        let datas = await timetableGetAll()
        this.props.resetTimetable()
        datas.map(data => {
            this.props.addTimetable(data)
        })
    }

    render() {
        return (
            <ScrollView style={ReportStyles.bg}>
                <DayBar />
                <View style={[ReportStyles.bgWhite, Styles.paddingTop10, Styles.paddingBottom10]}>
                    <HourBG
                        half = { this.state.roleWipper }
                    />
                    <ListCardEvent
                        roleId = {this.props.navigation.state.params.id}
                        half = { this.state.roleWipper }
                    />
                </View>
            </ScrollView>
        )
    }
}

export default Timetable