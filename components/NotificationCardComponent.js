import React, { Component } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import { get as assignGet } from '../utils/apiAssign'
import checkDayLater from '../utils/DayLater'

import Styles from '../styles/NotificationStyle'
import ReportStyles from '../styles/reportProblemStyle'
import ViewStyles from '../styles/ViewProblemStyle'

class NotificationCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            route: [
                {
                    table: 'problems',
                    navigate: 'AProblem'
                },
                {
                    table: 'assigns',
                    navigate: 'AProblem'
                },
                {
                    table: 'timetables',
                    navigate: 'TimetableDetail'
                },
                {
                    table: 'announces',
                    navigate: 'Announce'
                }
            ]
        }
    }

    render() {
        return (
            <TouchableOpacity
                style={[
                    Styles.row,
                    Styles.border,
                    ReportStyles.bgWhite,
                    ViewStyles.padTopBot10,
                    Styles.paddingLeft15
                ]}
                onPress={ async () => {
                    let data = JSON.parse(this.props.data.data)
                    this.state.route.map(async route => {
                        if (route.table == data.table) {
                            let id = 0
                            if(route.navigate == 'assigns') {
                                let assign = await assignGet(data.id)
                                id = assign.problem_id
                            }
                            else {
                                id = data.id
                            }
                            this.props.navigation.navigate(route.navigate, {id: id, noti: true})
                        }
                    })
                }}
            >
                <View style={[Styles.flex08, Styles.column]}>
                    <Text style={ViewStyles.topicForAllView}>
                        {
                            this.props.data.title.lenght <= 25
                            ? this.props.data.title.substr(0, 25)
                            : this.props.data.title.substr(0, 25) + '...'
                        }
                    </Text>
                    <Text style={ViewStyles.description}>
                        {
                            this.props.data.body <= 50
                            ? this.props.data.body.substr(0, 50)
                            : this.props.data.body.substr(0, 50) + '...'
                        }
                    </Text>
                </View>
                <View style={[Styles.flex02, Styles.itemCenter]}>
                    <Text style={[ViewStyles.date, ViewStyles.marginTop5]}>
                        {checkDayLater(this.props.data.created_at)}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default NotificationCard