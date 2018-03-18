import React, { Component } from 'react'
import { TouchableOpacity, View, Text } from 'react-native'

import checkDayLater from '../utils/DayLater'

import Styles from '../styles/AnnounceStyle'
import ReportStyles from '../styles/reportProblemStyle'

class AnnounceCard extends Component {
    render() {
        return (
            <TouchableOpacity
                style={[
                    Styles.row,
                    Styles.border,
                    ReportStyles.bgWhite
                ]}
                onPress={() => this.props.navigation.navigate('Announce', {id: this.props.data.id})}
            >
                <View style={[Styles.flex08, Styles.column]}>
                    <Text>
                        {
                            this.props.data.topic.lenght <= 25
                            ? this.props.data.topic.substr(0, 25)
                            : this.props.data.topic.substr(0, 25) + '...'
                        }
                    </Text>
                    <Text>
                        {
                            this.props.data.topic.description <= 50
                            ? this.props.data.description.substr(0, 50)
                            : this.props.data.description.substr(0, 50) + '...'
                        }
                    </Text>
                </View>
                <View style={[Styles.flex02, Styles.itemCenter]}>
                    <Text>{checkDayLater(this.props.data.created_at)}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default AnnounceCard