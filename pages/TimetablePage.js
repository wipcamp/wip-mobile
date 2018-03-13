import React, { Component } from 'react'
import { ScrollView, View } from 'react-native'

import { getByName as roleTeamGetByName } from '../utils/apiRoleTeam'

import DayBar from '../components/DayBarComponent'
import HourBG from '../components/HourBGComponent'

import Styles from '../styles/TimetableStyle'
import ReportStyles from '../styles/reportProblemStyle'

class Timetable extends Component {
    static navigationOptions = {
        title: 'Time Schedule'
    }

    constructor(props) {
        super(props)
        this.state = {
            roleWipper: 0
        }
    }

    async componentWillMount() {
        let id = await roleTeamGetByName('WIPPER')
        this.setState({
            roleWipper: id
        })
    }

    render() {
        return (
            <ScrollView style={ReportStyles.bg}>
                <DayBar />
                <View>
                    <HourBG
                        half={ this.props.navigation.state.params.id == this.state.roleWipper ? true : false }
                    />
                </View>
            </ScrollView>
        )
    }
}

export default Timetable