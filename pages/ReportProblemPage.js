import React, { Component } from 'react'
import { View,Text } from 'react-native'
import { connect } from 'react-redux'

import TopicInput from '../components/TopicInputComponent'
import Catagory from '../components/CatagoryComponent'
import Desciption from '../components/DescriptionInputComponent'

const mapStateToProps = state => {
    return {
        state: state
    }
}

class ReportProblem extends Component {
    static navigationOptions = {
        title: 'ReportProblem',
        headerRight: <Text>ADD</Text>
    }
    
    componentDidUpdate() {
        console.log(this.props.state)
    }

    render() {
        return (
            <View>
                <TopicInput />
                <Catagory />
                <Desciption />
            </View>
        )
    }
}

export default connect(mapStateToProps)(ReportProblem)