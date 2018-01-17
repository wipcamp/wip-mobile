import React, { Component } from 'react'
import { TextInput } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { setNewProblemTopic } from '../ducks/NewProblem'

const mapStateToProps = (state) => {
    return {
        topic : state.newProblem.topic
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTopic : bindActionCreators(setNewProblemTopic, dispatch)
    }
}

class TopicInput extends Component {
    componentWillMount() {
        console.log(this.props.topic)
    }

    render() {
        return (
            <TextInput
                placeholder='Topic'
                value={this.props.topic}
                onChangeText={(text) => {
                    this.props.setTopic(text)
                }}
            />
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicInput)
