import React, { Component } from 'react'
import { ScrollView, View, AsyncStorage, RefreshControl } from 'react-native'

import { getByUserId as notificationGetByUserId } from '../utils/apiNotification'

import ListCardNotification from '../components/ConnectListCardNotificationComponent'

import ReportStyle from '../styles/reportProblemStyle'

class Notification extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    async componentWillMount() {
        await this.fetchNoti()
    }

    render() {
        return (
            <ScrollView
                style={ReportStyle.bg}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.loading}
                        onRefresh={async () => await this.fetchNoti()}
                        colors={["#ff8214"]}
                        tintColor="#ff8214"
                        size={RefreshControl.SIZE.LARGE}
                    />
                }
            >
                <ListCardNotification
                    navigation={this.props.navigation}
                />
            </ScrollView>
        )
    }

    async fetchNoti() {
        let user = await AsyncStorage.getItem('user')
        user = JSON.parse(user)

        let datas = await notificationGetByUserId(user.user_id)
        
        this.props.resetNotification()
        datas.map(data => this.props.addNotification(data))
        this.props.reverseNotification()
        this.setState({loading: false})
    }
}

export default Notification