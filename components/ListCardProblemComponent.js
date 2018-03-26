import React, { Component } from 'react'
import { FlatList } from 'react-native'

import ProblemCard from './ProblemCardComponent'

class ListCardProblem extends Component {
    render() {
        console.log('assigns : ', this.props.assigns)
        return (
            <FlatList
                data={this.props.problem}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => {
                    if(!(item.is_solve || item.not_solve)) {
                        return (
                            <ProblemCard
                                key={item.id}
                                data={item}
                                navigation={this.props.navigation}
                                assign={this.props.assigns.indexOf(item.id) != -1}
                            />
                        )
                    }
                }}
            />
        )
    }
}

export default ListCardProblem