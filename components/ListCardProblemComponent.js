import React, { Component } from 'react'
import { FlatList } from 'react-native'

import ProblemCard from './ProblemCardComponent'

class ListCardProblem extends Component {
    render() {
        return (
            <FlatList
                data={this.props.problem}
                extraData={this.props.filter}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    if(this.props.filter == item.problem_type_id || this.props.filter == 0) {
                        return (
                            <ProblemCard key={item.id} data={item} navigation={this.props.navigation} />
                        )
                    }
                }}
            />
        )
    }
}

export default ListCardProblem