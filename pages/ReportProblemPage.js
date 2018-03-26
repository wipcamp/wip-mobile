import React, { Component } from 'react'
import { View } from 'react-native'

import TopicInput from '../components/ConnectTopicInputComponent'
import Category from '../components/ConnectCategoryCoponent'
import Priority from '../components/ConnectPriorityCoponent'
import Desciption from '../components/ConnectDescriptionInputComponent'

import Styles from '../styles/reportProblemStyle'

class ReportProblem extends Component {
    render() {
        return (
            <View style={Styles.bg}>
                <TopicInput />
                <Category />
                <Priority />
                <Desciption />
            </View>
        )
    }
}

export default ReportProblem