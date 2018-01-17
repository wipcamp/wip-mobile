import React, { Component } from 'react'
import { TextInput } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setNewProblemTopic } from '../ducks/NewProblem'

const mapStateToProps = state => {
    return {
        topic : state.NewProblemReducer.newProblem.topic
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setTopic : bindActionCreators(setNewProblemTopic, dispatch)
    }
}

class TopicInput extends Component {
    render() {
        return (
            <TextInput
                placeholder='Topic'
                value={this.props.topic}
                onChangeText={(text) => {
                    console.log(this.props.topic)
                    this.props.setTopic(text)
                }}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicInput)
