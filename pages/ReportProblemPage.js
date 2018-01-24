import React, { Component } from 'react'
import { View,Text } from 'react-native'
import { connect } from 'react-redux'


import TopicInput from '../components/TopicInputComponent'
import Catagory from '../components/CatagoryComponent'
import Desciption from '../components/DescriptionInputComponent'

import Styles from '../styles/reportProblemStyle'

const mapStateToProps = state => {
    return {
        state: state
    }
}

class ReportProblem extends Component {
    static navigationOptions = {
        title: 'ReportProblem',
        headerRight: <Text
                        style={Styles.addButon}
                        onPress={() => {}}
                    >
                        ADD
                    </Text>
    }
    
    componentDidUpdate() {
        console.log(this.props.state)
    }

    render() {
        return (
            <View style={Styles.bg}>
                <View style={Styles.topicGray} />
                <TopicInput />
                <Catagory />
                <View style={Styles.topicGray} />
                <Desciption />
            </View>
        )
    }
}

export default connect(mapStateToProps)(ReportProblem)