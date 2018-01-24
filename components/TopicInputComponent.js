import React, { Component } from 'react'
import { View, TextInput} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

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
                <TextInput
                    placeholder='Topic'
                    value={this.props.topic}
                    onChangeText={(text) => {
                        this.props.setTopic(text)
                    }}
                    
                    style={[Styles.topicWhite, Styles.borderTopic,Styles.Text]}
                />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicInput)
