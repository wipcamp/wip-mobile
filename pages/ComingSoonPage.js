import React, {Component} from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setNewProblemReportId } from '../ducks/NewProblem'

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        setReportId : bindActionCreators(setNewProblemReportId, dispatch)
    }
}

class ComingSoon extends Component {
    static navigationOptions = {
        header: null
    }

    componentWillMount() {
        this.props.setReportId(1);
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
                    title="All Problem"
                    onPress={() => {
                        this.props.navigation.navigate('AllProblem')
                    }}
                />
                <Button
                    title="Mock A Problem"
                    onPress={() => {
                        this.props.navigation.navigate('MockAProblem')
                    }}
                />
                <Button
                    title="Mock AllProblem"
                    onPress={() => {
                        this.props.navigation.navigate('MockAllProblem')
                    }}
                />
            </View>
        )
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(ComingSoon)

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