import React, { Component } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import LayoutStyles from '../styles/LayoutStyle'
import ColorStyles from '../styles/ColorStyle'
import TextStyles from '../styles/TextStyles'
import ComponentStyles from '../styles/ComponentStyle'

class EventCard extends Component {
    render() {
        return(
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('TimetableDetail', {id: this.props.data.id})}
                style={[
                    LayoutStyles.row,
                    LayoutStyles.padLR10,
                    LayoutStyles.padT2,
                    LayoutStyles.padB4,
                    ColorStyles.bgWhite
                ]}
            >
                <View
                    style={[
                        LayoutStyles.flex025,
                        LayoutStyles.column,
                        LayoutStyles.alignEnd,
                        LayoutStyles.justifyStart,
                        LayoutStyles.padT5,
                    ]}
                >
                    <Text
                        style={[
                            TextStyles.kanit,
                            TextStyles.size19
                        ]}
                    >
                        { this.__renderTime() }
                    </Text>
                    <Text
                        style={[
                            TextStyles.kanit,
                            TextStyles.size10,
                            ColorStyles.textGray
                        ]}
                    >
                        { this.__renderDuration() }
                    </Text>
                </View>
                <View
                    style={[
                        LayoutStyles.flex01,
                        LayoutStyles.column,
                        LayoutStyles.alignCenter,
                        LayoutStyles.justifyCenter
                    ]}
                >
                    <View
                        style={[
                            LayoutStyles.flex02,
                            LayoutStyles.justifyCenter
                        ]}
                    >
                        <View style={ComponentStyles.pointTimeline} />
                    </View>
                    <View
                        style={[
                            LayoutStyles.flex08,
                            ComponentStyles.verticalLine
                        ]}
                    />
                </View>
                <View
                    style={[
                        LayoutStyles.flex065,
                        LayoutStyles.column,
                        LayoutStyles.alignStart,
                        LayoutStyles.justifyStart,
                        LayoutStyles.padT5,
                        LayoutStyles.padL10
                    ]}
                >
                    <Text
                        style={[
                            TextStyles.kanit,
                            TextStyles.size16,
                            TextStyles.bold
                        ]}
                        ellipsizeMode='tail'
                        numberOfLines={1}
                    >
                        {this.props.data.event}
                    </Text>
                    <Text
                        style={[
                            TextStyles.kanit,
                            TextStyles.size14,
                            ColorStyles.textGray
                        ]}
                        ellipsizeMode='tail'
                        numberOfLines={1}
                    >
                        {this.props.data.description}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    __renderTime() {
        let start = this.props.data.start_on
                    .split(' ')[1]
                    .split(':')
        return `${start[0]}:${start[1]}`
    }

    __renderDuration() {
        let start = this.props.data.start_on
                    .split(' ')[1]
                    .split(':')
        let end = this.props.data.finish_on
                    .split(' ')[1]
                    .split(':')
        let diffHour = parseInt(end[0]) - parseInt(start[0])
        let diffMinute = parseInt(end[1]) - parseInt(start[1])
        let duration = diffHour * 60 + diffMinute
        let text = ''
        if (duration / 60 >= 1) {
            text += `${Math.floor(duration/60)} ชั่วโมง`
        }
        if (duration % 60 > 0) {
            text += ` ${duration % 60} นาที`
        }
        return text
    }
}

export default EventCard