import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'

import Styles from '../styles/TimetableStyle'

class DayBox extends Component {
    render() {
        return (
            <TouchableOpacity
                style={this._renderStyle()}
                onPress={() => this.props.setDate(`${this.props.day}-${this.props.month}`)}
            >
                <Text style={this._renderTextStyle()}>{this.props.day}</Text>
                <Text style={this._renderTextStyle()}>{this.props.month}</Text>
            </TouchableOpacity>
        )
    }

    _renderStyle() {
        let style = [
            Styles.flex1,
            Styles.alignCenter
        ]
        if(!this.props.last) {
            style.push(Styles.dateBorder)
        }
        if(this.props.date == `${this.props.day}-${this.props.month}`) {
            style.push(Styles.currentDate)
        }
        return style
    }

    _renderTextStyle() {
        let style = []
        if(this.props.date == `${this.props.day}-${this.props.month}`) {
            style.push(Styles.textWhite)
        }
        return style
    }
}

export default DayBox