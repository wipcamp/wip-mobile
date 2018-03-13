import React, { Component } from 'react'
import { View,Text } from 'react-native'

import AddButton from '../components/ConnectAddButtonComponent'
import TopicInput from '../components/ConnectTopicInputComponent'
import Category from '../components/ConnectCategoryCoponent'
import Desciption from '../components/ConnectDescriptionInputComponent'

import Styles from '../styles/reportProblemStyle'

class ReportProblem extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'ReportProblem',
        headerRight: <AddButton navigation={navigation} />
    })

    render() {
        return (
            <View style={Styles.bg}>
                <TopicInput />
                <Category />
                <Desciption />
            </View>
        )
    }
}

export default ReportProblem