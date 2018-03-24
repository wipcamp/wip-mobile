import React, { Component } from 'react'
import { AsyncStorage, View } from 'react-native'

import EventCard from './EventCardComponent'

import Styles from '../styles/TimetableStyle'
import ViewStyles from '../styles/ViewProblemStyle'

class ListCardEvent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            roleteams: []
        }
    }

    async componentWillMount() {
        let user = await AsyncStorage.getItem('user')
        user = JSON.parse(user)
        this.setState({
            roleteams: user.roleteams
        })
    }

    render() {
        return (
            <View style={[Styles.eventContainer]}>
                {this._renderCardEvent()}
            </View>
        )
    }

    _renderCardEvent() {
        let datas = this.props.timetable.filter(data => this.state.roleteams.indexOf(data.role_team_id) >= 0)
        return datas.map(data => (
            <EventCard key={data.id} data={data}/>
        ))
    }
}

export default ListCardEvent