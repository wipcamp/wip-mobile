import React, { Component } from 'react'
import { View,Text } from 'react-native'
import { connect } from 'react-redux'

import TopicInput from '../components/TopicInputComponent'
import Catagory from '../components/CatagoryComponent'

class ReportProblem extends Component {
    static navigationOptions = {
        title: 'ReportProblem',
        headerRight: <Text>ADD</Text>
    }

    render() {
        return (
            <View>
                <TopicInput />
                <Catagory />
            </View>
        )
    }
}

export default connect()(ReportProblem)