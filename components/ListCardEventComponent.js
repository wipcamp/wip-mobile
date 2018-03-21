import React, { Component } from 'react'
import { View } from 'react-native'

import EventCard from './EventCardComponent'

import Styles from '../styles/TimetableStyle'
import ViewStyles from '../styles/ViewProblemStyle'

class ListCardEvent extends Component {
    render() {
        return (
            <View style={[Styles.eventContainer]}>
                {this._renderCardEvent()}
            </View>
        )
    }

    _renderCardEvent() {
        datas = this.props.timetable.filter(data => this.props.roleId == data.role_team_id)
        return datas.map(data => {
            if(this.checkdate(this.props.date, data.start_on)) {
                return <EventCard key={data.id} data={data} half={this.props.half} />
            }
        })
    }

    checkdate(stateDate, timestamp) {
        let date = stateDate.split('-')

        switch (date[1]) {
            case "May":
                date[1] = 5
                break;
            case "Jun":
                date[1] = 6
                break;
            default:
                break;
        }

        timestamp = timestamp.split(' ')[0].split('-')
        let result = (parseInt(date[0]) == parseInt(timestamp[2])) && (date[1] == parseInt(timestamp[1]))
            ? true
            : false
        return result
    }
}

export default ListCardEvent