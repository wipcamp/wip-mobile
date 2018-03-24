import React, { Component } from 'react'
import { FlatList } from 'react-native'

import ProblemCard from './ProblemCardComponent'

class ListCardProblem extends Component {
    render() {
        return (
            <FlatList
                data={this.props.problem}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                    <ProblemCard key={item.id} data={item} navigation={this.props.navigation} />
                )}
            />
        )
    }
}

export default ListCardProblem