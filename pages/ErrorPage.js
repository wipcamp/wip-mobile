import React, { Component } from 'react'
import { View, Text, StyleSheet,Button} from 'react-native'

import Styles from '../styles/ErrorPageStyle'

class ErrorPage extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.textTop}>You don't have</Text>
                <Text style={Styles.textBottom}>permission to access</Text>
            </View>
        )
    }
}

export default ErrorPage


