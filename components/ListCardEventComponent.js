import React, { Component } from 'react'
import { AsyncStorage, FlatList } from 'react-native'

import EventCard from './EventCardComponent'

import Styles from '../styles/TimetableStyle'
import ViewStyles from '../styles/ViewProblemStyle'

class ListCardEvent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null
        }
    }

    async componentDidUpdate() {
        let user = await AsyncStorage.getItem('user')
        user = JSON.parse(user)
        let roleteam = user.roleteams

        let data = this.props.timetable.filter(data => roleteam.indexOf(data.role_team_id) >= 0)
        this.setState({
            data: data
        })
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => 
                    <EventCard
                        key={item.id}
                        data={item}
                        navigation={this.props.navigation}
                    />
                }
            />
        )
    }
}

export default ListCardEvent