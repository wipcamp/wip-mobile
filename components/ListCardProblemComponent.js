import React, { Component } from 'react'
import { FlatList } from 'react-native'
import { connect } from 'react-redux'

import ProblemCard from './ProblemCardComponent'

const mapStateToProps = state => {
    return {
        problem : state.ReportReducer.problem,
        filter : state.FilterReducer.filter
    }
}

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

export default connect(mapStateToProps)(ListCardProblem)