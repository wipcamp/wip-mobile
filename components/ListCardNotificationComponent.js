import React, { Component } from 'react'
import { FlatList } from 'react-native'

import NotificationCard from './NotificationCardComponent'

class ListCardNotification extends Component {
    render() {
        return (
            <FlatList
                data={this.props.notification}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <NotificationCard
                        key={item.id}
                        data={item}
                        navigation={this.props.navigation}
                    />
                )}
            />
        )
    }
}

export default ListCardNotification