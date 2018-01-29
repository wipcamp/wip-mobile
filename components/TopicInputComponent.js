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
            <View style={[Styles.bgWhite, Styles.spacesTop ]}>       
                <TextField
                    label ='Topic'
                    value={this.props.topic}
                    onChangeText={(text) => {
                        this.props.setTopic(text)
                    }}
                    labelFontSize={20}
                    fontSize={18}
                    containerStyle={Styles.inputPadding}
                />
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicInput)
