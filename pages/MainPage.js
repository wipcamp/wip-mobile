import React, { Component } from 'react'
import { AsyncStorage, View } from 'react-native'



class MainPage extends Component {
    static navigationOptions = {
        header: null
    }

    async componentWillMount() {
        let user = await AsyncStorage.getItem('user')
        user = JSON.parse(user)
        console.log('user : ', user)
        this.props.setReportId(user.user_id)
    }

    render() {
        return (
            <View>
            </View>
        )
    }
}

export default MainPage
