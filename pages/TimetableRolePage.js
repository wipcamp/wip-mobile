import React, { Component } from 'react'
import { View, AsyncStorage } from 'react-native'

import { getByName as roleGetByName } from '../utils/apiRole'
import { getByName as roleTeamGetByName } from '../utils/apiRoleTeam'

import RoleCard from '../components/RoleCardComponent'
import Styles from '../styles/TimetableStyle'
import ReportStyles from '../styles/reportProblemStyle'

class TimetableRole extends Component {

    static navigationOptions = {
        title: 'Time Schedule'
    }

    render() {
        return (
            <View style={ReportStyles.bg}>
                <RoleCard
                    title="P'ITIM"
                    onPressFunction={async () => {
                        let id = await roleTeamGetByName('ITIM')
                        this.props.navigation.navigate('Timetable', {id: id})
                    }}
                />
                <RoleCard
                    title="P'VICHAKARN"
                    onPressFunction={async () => {
                        let id = await roleTeamGetByName('VICHAKARN')
                        this.props.navigation.navigate('Timetable', {id: id})
                    }}
                />
                <RoleCard
                    title="P'SWATDIKARN"
                    onPressFunction={async () => {
                        let id = await roleTeamGetByName('SWATDIKARN')
                        this.props.navigation.navigate('Timetable', {id: id})
                    }}
                />
                <RoleCard
                    title="P'LOCATION"
                    onPressFunction={async () => {
                        let id = await roleTeamGetByName('LOCATION')
                        this.props.navigation.navigate('Timetable', {id: id})
                    }}
                />
                <RoleCard
                    title="P'MC"
                    onPressFunction={async () => {
                        let id = await roleTeamGetByName('MC')
                        this.props.navigation.navigate('Timetable', {id: id})
                    }}
                />
                <RoleCard
                    title="P'WIPPER"
                    onPressFunction={async () => {
                        let user = await AsyncStorage.getItem('user')
                        user = JSON.parse(user)
                        let seniorId = await roleGetByName('camp_staffs_senior')
                        let senior = false
                        for (let i = 0; i < user.roles.length; i++) {
                            if (user.roles[i] == seniorId) {                                
                                senior = true
                            }
                        }
                        if (senior) {
                            console.log('senior')
                            let id = await roleTeamGetByName('WIPPER')
                            this.props.navigation.navigate('Timetable', {id: id}) 
                        } 
                        else {                            
                            this.props.navigation.navigate('Error')
                        }
                    }}
                />
            </View>
        )
    }
}

export default TimetableRole