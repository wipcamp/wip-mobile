import React, { Component } from 'react'
import { View,Text } from 'react-native'
import { connect } from 'react-redux'

import AddButton from '../components/AddButtonComponent'
import TopicInput from '../components/TopicInputComponent'
import Catagory from '../components/CatagoryComponent'
import Desciption from '../components/DescriptionInputComponent'

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
                <Catagory />
                <Desciption />
            </View>
        )
    }
}

export default connect()(ReportProblem)