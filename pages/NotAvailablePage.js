import React, { Component } from 'react'
import { View, Text } from 'react-native'

import Styles from '../styles/ErrorPageStyle'

class NotAvailable extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text style={Styles.textTop}>Sorry,</Text>
                <Text style={Styles.textBottom}>this function isn't available now.</Text>
            </View>
        )
    }
}

export default NotAvailable