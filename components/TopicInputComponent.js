import React, { Component } from 'react'
import { View } from 'react-native'
import { TextField } from 'react-native-material-textfield'

import Styles from '../styles/reportProblemStyle'

class TopicInput extends Component {
    render() {
        return (
            <View style={[Styles.bgWhite, Styles.spacesTop ]}>
                <TextField
                    label ='Topic'
                    value={this.__renderTopicValue()}
                    onChangeText={(text) => {
                        this.props.setTopic(text)
                    }}
                    labelFontSize={14}
                    labelPadding={0}                    
                    labelHeight={20}
                    inputContainerPadding={5}
                    fontSize={18}
                    containerStyle={Styles.inputPadding}
                    disabled={this.props.view ? true : false}
                    multiline={this.props.view ? true : false}                    
                />
            </View>
        )
    }

    __renderTopicValue() {
        let topicValue
        if(this.props.view) {
            topicValue = this.props.problem
                            .filter(problem => problem.id == this.props.id)
                            [0].topic
        }
        else {
            topicValue = this.props.topic
        }
        return topicValue 
    }
}

export default TopicInput