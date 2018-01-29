import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'


import Styles from '../styles/ViewAProblemStyle'

class AProblem extends Component {
    static navigationOptions = {
        title: 'Details'
    }

    render() {
        return (
            <View style={ Styles.bg }>
                <Text style={[ Styles.boxGray , Styles.topicGray, Styles.border]}> </Text>
                <View style={[ Styles.boxWhite, Styles.topicWhite, Styles.border]}>
                    <Text style={ Styles.text }>  Topic</Text>
                </View>
                <View style={[ Styles.boxWhite, Styles.topicWhite, Styles.border]}>
                        <Text style={ Styles.text }>  Category</Text>
                </View>
                <Text style={[ Styles.boxGray , Styles.topicGray, Styles.border]}> </Text>
                <View style={[ Styles.boxWhite, Styles.topicWhite, Styles.border]}>
                        <Text style={ Styles.text }>  Date</Text>
                </View>
                <Text style={[ Styles.boxGray , Styles.topicGray, Styles.border]}> </Text>
                <View style={[ Styles.boxWhite, Styles.topicWhite, Styles.border]}>
                        <Text style={ Styles.textBold }>  Detail</Text>
                </View>
                <Text style={[ Styles.boxGray , Styles.topicGray, Styles.border]}> </Text>
                <View style={[ Styles.boxWhite, Styles.topicWhite, Styles.border]}>
                        <Text style={ Styles.text }>  Reporter</Text>
                    </View>
                <Text style={[ Styles.boxGray , Styles.topicGray, Styles.border]}> </Text>
                    <View style={[ Styles.boxWhite, Styles.topicWhite, Styles.border]}>
                        <Text style={ Styles.text }>  Solved</Text>
                    </View>
            </View>
        )
    }
}

export default AProblem

