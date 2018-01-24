import React, { Component } from 'react'
import { View } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { TextField } from 'react-native-material-textfield'

import { setNewProblemTopic } from '../ducks/NewProblem'
import Styles from '../styles/reportProblemStyle'

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
            <View style={ Styles.bgWhite }>
                <TextField
                    label='Topic Name'
                    value={this.props.topic}
                    onChangeText={(text) => {
                        this.props.setTopic(text)
                    }}
                    style={[Styles.topicWhite, Styles.borderTopic]}
                />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicInput)
