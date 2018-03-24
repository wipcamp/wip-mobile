import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'

import { get as timetableGet } from '../utils/apiTimetable'

import ViewTopic from '../components/ViewTopicComponent'
import ViewDescription from '../components/ViewDescriptionComponent'
import ViewData from '../components/ViewDataComponent'

import ReportStyles from '../styles/reportProblemStyle'

class TimetableDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            loading: true
        }
    }

    async componentWillMount() {
        let data = await timetableGet(this.props.navigation.state.params.id)
        this.props.updateTimetable(data)
        this.setState({
            data: data,
            loading: false
        })
    }
    
    render() {
        return (
            <View style={ReportStyles.bg}>
            { this.state.loading 
                ? <ActivityIndicator size="large" color="#ff8214" />
                : this.__renderData()
            }
            </View>
        )
    }

    __renderData() {
        return (
            <View>
                <ViewTopic topic={this.state.data.event} />
                <ViewDescription description={this.state.data.description} />
                <ViewData
                    left = "Location"
                    right = { this.state.data.location }
                />
            </View>
        )
    }
}

export default TimetableDetail