import React, { Component } from 'react'
import { FlatList } from 'react-native'

import AnnounceCard from './AnnounceCardComponent'

class ListCardAnnounce extends Component {
    render() {
        return (
            <FlatList
                data={this.props.announce}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <AnnounceCard key={item.id} data={item} navigation={this.props.navigation} />
                )}
            />
        )
    }
}

export default ListCardAnnounce