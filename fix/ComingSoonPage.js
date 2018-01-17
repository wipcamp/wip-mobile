import React, {Component} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

class ComingSoon extends Component {
    constructor(props) {
        super(props)
    }

    static navigationOptions = {
        header: null
    }

    render() {
        const { navigate } = this.props.navigation

        return (
            <View style={styles.container}>
                <Text style={styles.header}>WIP Mobile</Text>
                <Text style={styles.header}>Coming soon</Text>
                <Button title='Login' onPress={this.goToLogin.bind(this)} />
            </View>
        )
    }

    goToLogin() {
        const { navigate } = this.props.navigation
        navigate('Login')
    }
}
  
export default ComingSoon

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