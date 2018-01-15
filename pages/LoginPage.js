import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Login extends Component {
    static navigationOptions = {
        tabBarVisible: true
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Login Facebook</Text>
            </View>
        )
    }
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
    }
})