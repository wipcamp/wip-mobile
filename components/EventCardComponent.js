import React, { Component } from 'react'
import { View, Dimensions, Text } from 'react-native'

import Styles from '../styles/TimetableStyle'

class EventCard extends Component {
    render() {
        return(
            <View
                style={[
                    Styles.eventCard,
                    {
                        height: this._renderHeight(),
                        width: this._renderWidth(),
                        top: this._renderTop()
                    }              
                ]}
            >
                <Text>{this.props.data.event}</Text>
                <Text>{this.props.data.description}</Text>
                <Text>{this.props.data.location}</Text>
            </View>
        )
    }

    _renderHeight() {
        let start = this.props.data.start_on.split(' ')[1].split(':')
        let end = this.props.data.finish_on.split(' ')[1].split(':')
        let diffHour = parseInt(end[0]) - parseInt(start[0])
        let diffMinute = parseInt(end[1]) - parseInt(start[1])
        let minute = this.props.half ? 30 : 60
        let spacePerN = Dimensions.get('screen').height * 0.12

        let duration = ((diffHour * 60) + diffMinute) * (spacePerN / minute)

        return duration
    }

    _renderWidth() {
        const width = Dimensions.get('screen').width
        return width * 0.9
    }

    _renderTop() {
        const height = Dimensions.get('screen').height
        let start = this.props.data.start_on.split(' ')[1].split(':')
        start = (parseInt(start[0]) * 60) + parseInt(start[1])
        let minute = this.props.half ? 30 : 60
        let spacePerN = Dimensions.get('screen').height * 0.12
        
        let top = 9 + (start * (spacePerN / minute))

        return top
    }
}

export default EventCard