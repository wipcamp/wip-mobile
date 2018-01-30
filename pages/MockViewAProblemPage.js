import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'



import Styles from '../styles/MockViewAProblemStyle'

import switchButton from '../components/SwitchBoutton'

class AProblem extends Component {
    static navigationOptions = {
        title: 'Details'
    }

    render() {
        return (
            <View style={[ Styles.bg , Styles.spaces ]}>

                <View style={[ Styles.boxWhite, Styles.topicWhite, Styles.border]}>
                    <Text style={ Styles.text }>  Topic Name</Text>
                </View >
                <View style={[ Styles.boxWhite, Styles.topicWhite, Styles.border ]}>
                    <Text style={ Styles.text }>  Category</Text>
                </View>
                <View style={[ Styles.boxWhite, Styles.topicWhite, Styles.border, Styles.spaces ]}>
                    <Text style={ Styles.text }>  Date</Text>
                </View>
                <View style={[ Styles.boxWhite, Styles.topicWhite, Styles.border, Styles.spaces ]}>
                    <Text style={ Styles.textBold }>  Detail</Text>
                </View>
                <View style={[ Styles.boxWhite, Styles.topicWhite, Styles.border, Styles.spaces]}>
                    <Text style={ Styles.text }>  Reporter</Text>
                </View>
                <View style={[ Styles.boxWhite, Styles.topicWhite, Styles.border, Styles.spaces]}>
                    <Text style={ Styles.text }>  Solved</Text>
                </View>
                <View style={[ Styles.boxGray, Styles.topicWhite, Styles.border ]}>
                    <Text style={ Styles.textBold }>  Not solved</Text>
                    
                </View>
            </View>
        )
    }
}

export default AProblem

