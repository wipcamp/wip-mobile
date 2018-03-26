import React, { Component } from 'react'
import { View, FlatList, Text, Dimension } from 'react-native'

import Styles from '../styles/TimetableStyle'

class HourBG extends Component {
    render() {
        return (
            <View>
                <FlatList
                    data={this._renderData()}
                    keyExtractor={(item, index) => index}
                    renderItem={({item}) =>  (
                        <View style={[Styles.hourHeight, Styles.row]}>
                            <View style={[Styles.timeWidth, Styles.alignCenter]}>
                                <Text>{item.hour}</Text>
                            </View>
                            <View style={Styles.hourLine}>
                            </View>
                        </View>
                    )}
                />
            </View>
        )
    }

    _renderData() {
        let data = []
        for (let i = 0; i < 24; i++) {
            let time = i < 10
                    ? { hour: `0${i}:00` }
                    : { hour: `${i}:00` }
            data.push(time)
        }
        return data
    }
}

export default HourBG