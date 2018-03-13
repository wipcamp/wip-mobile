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
                            <View style={Styles.timeWidth}>
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
        if(this.props.half) {
            for (let i = 0; i < 48; i++) {
                let temp = `${ i / 2 }`.split('.')
                let time = {}
                if(temp.length == 1) {
                    temp[0].length == 1
                        ? time = { hour: `0${temp[0]}:00` }
                        : time = { hour: `${temp[0]}:00` }
                }
                else {
                    temp[0].length == 1
                        ? time = { hour: `0${temp[0]}:30` }
                        : time = { hour: `${temp[0]}:30` }
                }
                data.push(time)
            }
        }
        else {
            for (let i = 0; i < 24; i++) {
                let time = i < 10
                        ? { hour: `0${i}:00` }
                        : { hour: `${i}:00` }
                data.push(time)
            }
        }
        return data
    }
}

export default HourBG