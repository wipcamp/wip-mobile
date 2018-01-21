import React, { Component } from 'react'
import { View, Text, StyleSheet,Button} from 'react-native'

import Styles from '../styles/ErrorPageStyle'

class ErrorPage extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.textTop}>You don't have</Text>
                <Text style={Styles.textBottom}>permission to access</Text>
                <Button
                    title='BACK'
                    onPress={() => {
                        this.props.navigation.navigate('ComingSoon')
                    }}
                />
            </View>
        )
    }
}

export default ErrorPage


