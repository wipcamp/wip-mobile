import React, { Component } from 'react'
import { View, ActivityIndicator } from 'react-native'

import { get as announceGet } from '../utils/apiAnnounce'

import Topic from '../components/ViewTopicComponent'
import Description from '../components/ViewDescriptionComponent'

import ReportStyle from '../styles/reportProblemStyle'

class AnnouncePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
            loading: true
        }
    }

    async componentWillMount() {
        let data = await announceGet(this.props.navigation.state.params.id)
        this.setState({
            data: data,
            loading: false
        })
    }

    render() {
        return (
            <View style={ReportStyle.bg}>
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
                <Topic data={this.state.data} />
                <Description data={this.state.data} />
            </View>
        )
    }
}

export default AnnouncePage