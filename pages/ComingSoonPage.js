import React, {Component} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

class ComingSoon extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>WIP Mobile</Text>
                <Text style={styles.header}>Coming soon</Text>
                <Button
                    title='Login'
                    onPress={() => {
                        this.props.navigation.navigate('Login')
                    }} 
                />
                <Button
                    title='ReportProblem'
                    onPress={() => {
                        this.props.navigation.navigate('ReportProblem')
                    }}
                />
                <Button
                    title='Error'
                    onPress={() => {
                        this.props.navigation.navigate('Error')
                    }}
                />
                <Button
                    title="A Problem"
                    onPress={() => {
                        this.props.navigation.navigate('AProblem')
                    }}
                />
                <Button
                    title="AllProblem"
                    onPress={() => {
                        this.props.navigation.navigate('AllProblem')
                    }}
                />
            </View>
        )
    }
}
  
export default connect()(ComingSoon)

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